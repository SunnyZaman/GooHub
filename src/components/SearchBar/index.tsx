import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../assets/images';
import Microphone from './IconButtons/Microphone';
import Cancel from './IconButtons/Cancel';

const SearchWrapper = styled.div`
    display: flex;
    align-content: stretch;
    height: 36px;
    width: 500px;
    
    border: 1px solid rgb(234, 234, 234);
    border-radius: 24px;
    align-items: center;
    padding: 0px 1em;
    &:hover, &:focus-within {
        box-shadow:0px 3px 8px #E4E4E4;
    };
    @media (max-width: 560px) {
        width: 90%;
    }
`;
const SearchInput = styled.input`
    flex: 1 0 auto;
    padding: 0px 9px;
    outline: none;
    border: none;
`;

const SearchImage = styled.img`
  filter: invert(73%) sepia(8%) saturate(262%) hue-rotate(169deg) brightness(87%) contrast(85%);
`;
function SearchBar(props: any) {
    const [hasInput, setHasInput] = useState(false);
    const inputRef:any = useRef(null);
    const { searchValue, setSearchValue } = props;
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(name, value);
        setSearchValue(value);
    }
    useEffect(() => {
        setHasInput(searchValue.length > 0);

    }, [searchValue]);
    const inputFocus = () =>{
        inputRef.current!.focus()
    }
    return (
        <SearchWrapper onClick={inputFocus}>
            <SearchImage src={SearchIcon} alt="Search Icon" height="15px" width="auto" />
            <SearchInput type="text" name="search" value={searchValue} ref={inputRef} onChange={handleChange}></SearchInput>
                {hasInput && <Cancel setValue={setSearchValue} />}
                <Microphone setValue={setSearchValue} />
        </SearchWrapper>
    );
}

export default SearchBar;
