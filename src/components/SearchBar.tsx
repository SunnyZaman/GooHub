import React from 'react';
import { GoogleLogo } from '../assets/images';
import styled from 'styled-components';

const SearchInput = styled.input`
    padding: 10px;
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
            <SearchInput></SearchInput>
    );
}

export default SearchBar;
