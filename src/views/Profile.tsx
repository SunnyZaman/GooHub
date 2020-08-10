import React from 'react';
import Loader from '../components/Loader';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const REPOSITORIES = gql`
  {
    viewer {
      repositories(last: 100, isFork: false) {
        nodes {
          name
          description
          url
          languages(first: 5) {
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }
`;
function Profile() {
    return (
        <Query query={REPOSITORIES} variables={{}}>
            {
                ({ data, loading }: any) => {
                    return loading ? (<Loader />) : 
                    (<p>Loaded</p>)
                }
            }
        </Query>
    );
}

export default Profile;
