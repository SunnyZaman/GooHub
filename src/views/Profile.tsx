import React, { useState } from 'react';
import Loader from '../components/Loader';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { GLogo } from '../assets/images';

const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

const Tab: any = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props: any) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props: any) => (props.active ? "none" : "")};
  background-color: ${(props: any) => (props.active ? "white" : "lightgray")};
  height: ${(props: any) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
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
          homepageUrl
        }
      }
      followers(first:100){
        nodes{
          name
          avatarUrl
          email
          login
          bio
        }
    }
  }
}
`;
  const [active, setActive] = useState(0);
  const handleClick = (e: any) => {
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
            (<div><Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
              <img src={GLogo} alt="G logo" height="20px" width="auto" />
                Content1
              </Tab>

              <Tab onClick={handleClick} active={active === 1} id={1}>
                Content2
              </Tab>
            </Tabs>

              <Content active={active === 0}>
                <h1>Content 1</h1>
              </Content>
              <Content active={active === 1}>
                <h1>Content 2</h1>
              </Content>
            </div>)
        }
      }
    </Query>
  );
}

export default Profile;
