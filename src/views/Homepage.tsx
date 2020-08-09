import React, { useState } from 'react';
import { GoogleLogo } from '../assets/images';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height:100%
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width:100%
`;
const Button = styled.button`
  background-color:#f2f2f2;
  padding:10px;
  margin:10px;
  color:#5F6368;
  font-size:14px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  &:hover{
    cursor: pointer;
    border: 1px solid #5F6368;
    color: #252626;
  }
`;
function Homepage() {
  const [searchValue, setSearchValue] = useState("");
const search = () =>{
  console.log("the search val: ", searchValue);
  
}
    return (
        <HomeWrapper>
            <img src={GoogleLogo}  alt="Google logo" height="100px" width="auto"/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}></SearchBar>
            <ButtonContainer>
                <Button onClick={search}>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </ButtonContainer>
            <p>Google offered in: <a href="/">Francais</a></p>
        </HomeWrapper>
    );
}

export default Homepage;
