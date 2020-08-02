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
const SearchBar = styled.input`
    border: none;
    padding: 10px;
    margin: 10px;
    height: 20px;
    width: 500px;
    border:1px solid #eaeaea;
    outline:none;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width:100%
`;
const Button = styled.div`
  background-color:#f2f2f2;
  border:none;
  padding:10px;
  margin:10px;
  color:#757575;
  font-size:10pt;
  font-weight:bold;
  font-family:arial;
  border-radius: 2px;
`;
function Homepage() {
    return (
        <HomeWrapper>
            <img src={GoogleLogo}  alt="Google logo" height="100px" width="auto"/>
            <SearchBar></SearchBar>
            <ButtonContainer>
                <Button>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </ButtonContainer>
        </HomeWrapper>
    );
}

export default Homepage;
