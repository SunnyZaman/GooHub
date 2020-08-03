import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../assets/images';

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

function SearchBar() {
    return (
        <div>
            <SearchInput type="text"></SearchInput>
            <img src={SearchIcon}  alt="Search Icon" height="20px" width="auto"/>
        </div>
    );
}

export default SearchBar;
