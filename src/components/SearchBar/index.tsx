import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../assets/images';
import Microphone from './IconButtons/Microphone';
import Cancel from './IconButtons/Cancel';
import { useHistory } from 'react-router-dom';

const SearchWrapper: any = styled.div`
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
    @media (max-width: 710px) {
        width: ${(props: any) => (props.isProfile ? "auto" : "500px")};
    }
    @media (max-width: 560px) {
        width: ${(props: any) => (props.isProfile ? "auto" : "90%")};
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
const SearchButton = styled.img`
    margin-left: 10px;
    filter: invert(38%) sepia(100%) saturate(557%) hue-rotate(183deg) brightness(106%) contrast(92%);
    outline:none;
    cursor:pointer
`;
function SearchBar(props: any) {
    const { isSearching, isProfile, defaultSearchVal } = props;
    const history = useHistory();
    const [searchValue, setSearchValue] = useState(defaultSearchVal);
    const [hasInput, setHasInput] = useState(false);
    const inputRef: any = useRef(null);
    useEffect(() => {
        setHasInput(searchValue.length > 0);
    }, [searchValue]);
    useEffect(() => {
        if (isSearching) {
            search();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSearching]);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(name, value);
        setSearchValue(value);
    }
    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            search();
        }
    }
    const search = () => {
        //   console.log("the search val: ", searchValue);
        if (searchValue.length > 0) {
            history.push('/profile/' + searchValue);
        }
    }
    const inputFocus = () => {
        inputRef.current!.focus()
    }
    return (
        <SearchWrapper isProfile={isProfile} onClick={inputFocus}>
            <SearchImage src={SearchIcon} alt="Search Icon" height="15px" width="auto" />
            <SearchInput type="text" name="search" autoComplete="off"
                value={searchValue} ref={inputRef} onChange={handleChange} onKeyPress={handleKeyDown} />
            {hasInput && <Cancel setValue={setSearchValue} />}
            <Microphone setValue={setSearchValue} />
            {isProfile && <SearchButton src={SearchIcon} tabIndex={0} onClick={search}
                alt="Search Button" height="15px" width="auto" />}
        </SearchWrapper>
    );
}

export default SearchBar;
