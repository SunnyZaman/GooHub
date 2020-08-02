import React from 'react';
import { GoogleLogo } from '../assets/images';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height:100%
`;
function Homepage() {
    return (
        <HomeWrapper>
            <img src={GoogleLogo}  alt="Google logo" height="100px" width="auto"/>
            <p>Search</p>
        </HomeWrapper>
    );
}

export default Homepage;
