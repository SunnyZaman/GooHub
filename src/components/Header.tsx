import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { GoogleLogo, GLogo } from '../assets/images';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height:47px;
//   border-bottom: 1px solid black;
`;
const InnerContainer = styled.div`
    // margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: space-between;
    align-items: center;
    width: 100%;
    // max-width: 148rem;
    padding: 12px 25px 5px 25px;
`;
const StyledLink = styled.a`
    font-size: 13px;
    color:#595959;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;
const LogoImage = styled.img`
    margin-left:auto;
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
// const LogoSearchContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     margin: -12px 0 0 -12px;
//     >*{
//         margin: 12px 0 0 12px;
//     }
// `;
function Header() {
    const location = useLocation();
    const isHome = (location.pathname === "/" || location.pathname === "/home") ? true : false;
    const getSearchQuery = () => {
        return location.pathname.split("profile/")[1];
    }
    // console.log(location.pathname);
    return (
        <Wrapper>
            <InnerContainer>
                {/* temp link, will link to my portfolio */}
                {isHome ?
                    <StyledLink href="https://github.com/SunnyZaman" target="_blank">Sunny Zaman</StyledLink> :
                    (
                        <>
                            <Link to="/">
                                <img src={GoogleLogo} alt="Google logo" height="30px" width="auto" />
                            </Link>
                            <SearchContainer>
                                <SearchBar isSearching={false} isProfile={true} defaultSearchVal={getSearchQuery} />
                            </SearchContainer>
                        </>
                    )
                }
                <LogoImage src={GLogo} alt="G logo" height="20px" width="auto" />
            </InnerContainer>

        </Wrapper>
    );
}

export default Header;
