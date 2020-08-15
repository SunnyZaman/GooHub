import React, { useState } from 'react';
import Loader from '../components/Loader';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { GLogo } from '../assets/images';

const ResultsContainer = styled.div`
margin: 10px 0;
`;

const Tabs = styled.div`
  // overflow: hidden;
  background: #fff;
  // font-family: Open Sans;
  // height: 3em;
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  border-bottom: 1px solid #ebebeb;
  padding: 0 110px;
`;

const Tab: any = styled.button`
display: flex;
    align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  // width: 10%;
  position: relative;
    margin-right: 8px;
    padding: 15px 5px;
  font-size: 1em;
  // border: ${(props: any) => (props.active ? "1px solid #ccc" : "")};
  color: ${(props: any) => (props.active ? "#1A73E8" : "")};
  border-bottom: ${(props: any) => (props.active ? "3px solid #1A73E8" : "3px solid transparent")};
  background-color: transparent;
  // height: ${(props: any) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
const Image =  styled.img`
margin-right: 5px;
`;
const Content: any = styled.div`
  ${(props: any) => (props.active ? "" : "display:none")}
`;
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
      repositories(first: 100, affiliations: OWNER, isFork: false, ownerAffiliations: OWNER) {
        nodes {
          url
          nameWithOwner
          name
          createdAt
          description
          homepageUrl,
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
  const [active, setActive] = useState(0);
  const handleClick = (e: any) => {
    console.log("Event:", e);
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  console.log(REPOSITORIES);

  return (
    <Query query={REPOSITORIES} variables={{}}>
      {
        ({ data, loading }: any) => {
          console.log(data);

          return loading ? (<Loader />) :
            (<ResultsContainer><Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
              <Image src={GLogo} alt="G logo" height="20px" width="auto" />
                Repositories
              </Tab>

              <Tab onClick={handleClick} active={active === 1} id={1}>
              <Image src={GLogo} alt="G logo" height="20px" width="auto" />
                Statistics
              </Tab>
              <Tab onClick={handleClick} active={active === 2} id={2}>
              <Image src={GLogo} alt="G logo" height="20px" width="auto" />
                Followers
              </Tab>
              <Tab onClick={handleClick} active={active === 3} id={3}>
              <Image src={GLogo} alt="G logo" height="20px" width="auto" />
                Following
              </Tab>
            </Tabs>

              <Content active={active === 0}>
                <h1>Content 1</h1>
              </Content>
              <Content active={active === 1}>
                <h1>Content 2</h1>
              </Content>
              <Content active={active === 2}>
                <h1>Content 3</h1>
              </Content>
              <Content active={active === 3}>
                <h1>Content 4</h1>
              </Content>
            </ResultsContainer>)
        }
      }
    </Query>
  );
}

export default Profile;
