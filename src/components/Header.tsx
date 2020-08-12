import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { GoogleLogo, GLogo } from '../assets/images';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height:47px;
//   border-bottom: 1px solid black;
`;
const InnerContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 148rem;
    padding: 0 15px;
`;
const StyledLink = styled.a`
    font-size: 13px;
    color:#595959;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

function Header() {
    const location = useLocation();
    const isHome = (location.pathname === "/" || location.pathname === "/home") ? true : false;
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
                            <img src={GoogleLogo} alt="Google logo" height="20px" width="auto" />
                        </Link>
                        <SearchBar/>
                        </>
                    )
                }
                <img src={GLogo} alt="G logo" height="20px" width="auto" />
            </InnerContainer>

        </Wrapper>
    );
}

export default Header;
