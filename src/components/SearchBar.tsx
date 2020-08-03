import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../assets/images';
const SearchWrapper = styled.div`
    position: relative;

`;
const SearchInput = styled.input`
    padding: 10px 40px 10px 40px;
    margin: 10px;
    height: 20px;
    width: 500px;
    border:1px solid #eaeaea;
    border-radius: 24px;
    outline:none;
    &:hover, &:focus {
        box-shadow:0px 3px 8px #E4E4E4;
    }
`;

const SearchImage = styled.img`
  position: absolute;
  left: 20;
  top: 15px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
`;

function SearchBar() {
    return (
        <SearchWrapper>
            <SearchInput type="text"></SearchInput>
            <SearchImage className="" src={SearchIcon}  alt="Search Icon" height="15px" width="auto"/>
        </SearchWrapper>
    );
}

export default SearchBar;
