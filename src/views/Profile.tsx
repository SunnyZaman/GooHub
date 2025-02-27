import React, { useState } from 'react';
import Loader from '../components/Loader';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { RepositoryIcon, StatisticsIcon, PeopleIcon } from '../assets/images';
import Tabs from '@bit/mui-org.material-ui.tabs';
import Tab from '@bit/mui-org.material-ui.tab';
import Repository from '../components/Profile/Repository';
import Follow from '../components/Profile/Follow';
import Statistics from '../components/Profile/Statistics';
import NoResults from '../components/NoResults';

const ResultsContainer = styled.div`
margin: 10px 0;
`;

const CustomTabs = styled(Tabs)`
margin-bottom: 10px;
border-bottom: 1px solid #ebebeb;
height: 36px !important;
& .MuiTab-labelIcon {
  min-height: auto !important;
}
& .Mui-selected{
  color: #1A73E8 !important;
}
& .MuiTabs-indicator{
  background-color: #1A73E8 !important;
  height: 3px;
}
`;

const CustomTab: any = styled(Tab)`
font-family: arial,sans-serif !important;
    font-size: 14px !important;
    text-transform: none !important;
    letter-spacing: normal !important;
    height: 36px !important;
    & .MuiTab-wrapper {
      flex-direction:row !important;
    }
`;
const Image: any = styled.img`
  filter: ${(props: any) => (props.hasFilter ? "grayscale(100%)" : "none")};
  margin-right: 5px;
`;

const CustomLink = styled.a`
  color: #70757a;
  margin-left: 50px;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
      style={{ padding: '0 50px', marginBottom: '25px' }}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
function Profile() {
  const { searchQuery } = useParams();
  const REPOSITORIES = gql`
  {
    user(login: "${searchQuery}") {
      url
      avatarUrl
      name
      login
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(first: 100, isFork: false) {
        nodes {
          url
          name
          createdAt
          description
          isPrivate
          languages(first: 5) {
            nodes {
              color
              name
            }
          }
        }
      }
      followers(first: 100){
        totalCount
        nodes{
          name
          avatarUrl
          login
          url
          bio
          followers(first: 0) {
            totalCount
          }
          following(first: 0) {
            totalCount
          }
        }
      }
      following(first: 100){
        totalCount
        nodes{
          name
          avatarUrl
          login
          url
          bio
            followers(first: 0) {
              totalCount
            }
            following(first: 0) {
              totalCount
            }
        }
      }
    }
}`;
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Query query={REPOSITORIES} variables={{}}>
      {
        ({ data, loading, error }: any) => {          
          return loading ? (<Loader />) :
            (
              <>
                {
                  error === undefined ? (

                    <ResultsContainer>
                      <CustomTabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        aria-label="scrollable tabs"
                      >
                        <CustomTab label="Repositories" icon={<Image hasFilter={value !== 0} src={RepositoryIcon} alt="Repository icon" height="20px" width="auto" />} {...a11yProps(0)} />
                        <CustomTab label="Statistics" icon={<Image hasFilter={value !== 1} src={StatisticsIcon} alt="Statistics icon" height="20px" width="auto" />}{...a11yProps(1)} />
                        <CustomTab label="Followers" icon={<Image hasFilter={value !== 2} src={PeopleIcon} alt="Followers icon" height="20px" width="auto" />} {...a11yProps(2)} />
                        <CustomTab label="Following" icon={<Image hasFilter={value !== 3} src={PeopleIcon} alt="Following icon" height="20px" width="auto" />} {...a11yProps(3)} />
                      </CustomTabs>
                      <CustomLink href={data.user.url} target="_blank">@{data.user.login}</CustomLink>
                      <TabPanel value={value} index={0}>
                        <Repository repositories={data.user.repositories.nodes} />
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Statistics repositories={data.user.repositories.nodes} followers={data.user.followers.totalCount}
                          following={data.user.following.totalCount} avatar={data.user.avatarUrl}
                          totalContributions={data.user.contributionsCollection.contributionCalendar.totalContributions}
                          login={data.user.login} />
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <Follow users={data.user.followers.nodes} />
                      </TabPanel>
                      <TabPanel value={value} index={3}>
                        <Follow users={data.user.following.nodes} />
                      </TabPanel>
                    </ResultsContainer>
                  ) :
                    <NoResults query={searchQuery} />
                }
              </>
            )
        }
      }
    </Query>
  );
}

export default Profile;
