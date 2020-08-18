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

const ResultsContainer = styled.div`
margin: 10px 0;
`;

const CustomTabs = styled(Tabs)`
margin-bottom: 5px;
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
  // // overflow: hidden;
  // background: #fff;
  // // font-family: Open Sans;
  // // height: 3em;
  // display:flex;
  // flex-direction: row;
  // flex-wrap:wrap;
  // border-bottom: 1px solid #ebebeb;
  // padding: 0 110px;
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
    // & img{
    //   filter: grayscale(100%);
    // }
// display: flex;
//     align-items: center;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   // width: 10%;
//   position: relative;
//     margin-right: 8px;
//     padding: 15px 5px;
//   font-size: 1em;
//   // border: ${(props: any) => (props.active ? "1px solid #ccc" : "")};
//   color: ${(props: any) => (props.active ? "#1A73E8" : "")};
//   border-bottom: ${(props: any) => (props.active ? "3px solid #1A73E8" : "3px solid transparent")};
//   background-color: transparent;
//   // height: ${(props: any) => (props.active ? "3em" : "2.6em; top:.4em")};
//   transition: background-color 0.5s ease-in-out;

//   :hover {
//     background-color: white;
//   }
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
// const Content: any = styled.div`
//   ${(props: any) => (props.active ? "" : "display:none")}
// `;

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
  // const REPOSITORIES = gql`
  //   {
  //     viewer {
  //       repositories(last: 100, isFork: false) {
  //         nodes {
  //           name
  //           description
  //           url
  //           languages(first: 5) {
  //             nodes {
  //               color
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;
  console.log(searchQuery);

  const REPOSITORIES = gql`
{
    user(login: "${searchQuery}") {
      url
      name
      login
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
      followers(first:100){
        nodes{
          name
          avatarUrl
          login
          bio
        }
    }
  }
}
`;
  // const [active, setActive] = useState(0);
  // const handleClick = (e: any) => {
  //   console.log("Event:", e);
  //   const index = parseInt(e.target.id, 0);
  //   if (index !== active) {
  //     setActive(index);
  //   }
  // };
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  console.log(REPOSITORIES);
  // const loading = false;
  // console.log(value)
  return (
    <Query query={REPOSITORIES} variables={{}}>
      {
        ({ data, loading }: any) => {
          console.log(data);
          return loading ? (<Loader />) :
            (
              <ResultsContainer>
                <CustomTabs
                  // style={{height: "36px"}}
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  // TabIndicatorProps={{style: {background:'green'}}}
                  //                   textColor="blue"
                  aria-label="scrollable tabs"
                >
                  <CustomTab label="Repositories" icon={<Image hasFilter={value !== 0} src={RepositoryIcon} alt="Repository icon" height="20px" width="auto" />} {...a11yProps(0)} />
                  <CustomTab label="Statistics" icon={<Image hasFilter={value !== 1} src={StatisticsIcon} alt="Statistics icon" height="20px" width="auto" />}{...a11yProps(1)} />
                  <CustomTab label="Followers" icon={<Image hasFilter={value !== 2} src={PeopleIcon} alt="Followers icon" height="20px" width="auto" />} {...a11yProps(2)} />
                  <CustomTab label="Following" icon={<Image hasFilter={value !== 3} src={PeopleIcon} alt="Following icon" height="20px" width="auto" />} {...a11yProps(3)} />
                </CustomTabs>
                <CustomLink href={data.user.url}>@{data.user.login}</CustomLink>
                <TabPanel value={value} index={0}>
                  <Repository repositories={data.user.repositories.nodes} />
                  {/* <Repository/> */}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Statistics
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Followers
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Following
                </TabPanel>
              </ResultsContainer>
            )
        }
      }
    </Query>
  );
}

export default Profile;
