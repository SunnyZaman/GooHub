import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchIcon, MicIcon, CloseIcon } from '../assets/images';
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
  left: 20px;
  top: 15px;
  padding: 9px 8px;
  filter: invert(73%) sepia(8%) saturate(262%) hue-rotate(169deg) brightness(87%) contrast(85%);
`;

const MicImage = styled.img`
  position: absolute;
  right: 20px;
  top: 10px;
  padding: 9px 8px;
  `;

const CloseImage = styled.img`
    position: absolute;
    right: 48px;
    border-left:1px solid #80868b;
    top: 13px;
    padding: 9px 8px;
    filter: invert(58%) sepia(10%) saturate(213%) hue-rotate(165deg) brightness(88%) contrast(87%);
`;

function SearchBar() {
    const [hasInput, setHasInput] = useState(false);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(name, value);
        setHasInput(value.length > 0);
    }
    return (
        <SearchWrapper>
            <SearchInput type="text" name="search" onChange={handleChange}></SearchInput>
            <SearchImage src={SearchIcon} alt="Search Icon" height="15px" width="auto" />
            {hasInput ? <CloseImage src={CloseIcon} tabIndex={0} alt="Close Icon" height="15px" width="auto" /> : null}
            <MicImage src={MicIcon} tabIndex={0} alt="Mic Icon" height="20px" width="auto" />
        </SearchWrapper>
    );
}

export default SearchBar;
