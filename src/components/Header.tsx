import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { GoohubLogo, GoohubIcon } from '../assets/images';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  display: flex;
`;
const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding: 12px 25px 5px 25px;
    z-index: 999;
`;
const StyledLink = styled.a`
    font-size: 13px;
    color:#595959;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;
const IconLink = styled.a`
    margin-left:auto;
`;
const LogoImage = styled.img`
    @media (max-width: 710px) {
        order:1;
    }
`;
const SearchContainer = styled.div`
    margin-left:15px;
    @media (max-width: 710px) {
        order:2;
        margin-left:0;
        width:100%;
    }
`;
function Header() {
    const location = useLocation();
    const isHome = (location.pathname === "/" || location.pathname === "/home") ? true : false;
    const getSearchQuery = () => {
        return location.pathname.split("profile/")[1];
    }
    return (
        <Wrapper>
            <InnerContainer>
                {/* temp link, will link to my portfolio */}
                {isHome ?
                    <StyledLink href="https://www.linkedin.com/in/sunny-zaman-24890a86/" target="_blank">Sunny Zaman</StyledLink> :
                    (
                        <>
                            <Link to="/">
                                <img src={GoohubLogo} alt="GooHub logo" height="30px" width="auto" />
                            </Link>
                            <SearchContainer>
                                <SearchBar isSearching={false} isProfile={true} defaultSearchVal={getSearchQuery} />
                            </SearchContainer>
                        </>
                    )
                }
                <IconLink href="https://github.com/SunnyZaman" target="_blank">
                    <LogoImage src={GoohubIcon} alt="GooHub icon" height="30px" width="auto" />
                </IconLink>
            </InnerContainer>

        </Wrapper>
    );
}

export default Header;
