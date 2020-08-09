import React from 'react';
import { GLogo } from '../assets/images';
import styled from 'styled-components';

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
const Link = styled.a`
    font-size: 13px;
    color:#595959;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

function Header() {
    return (
        <Wrapper>
         <InnerContainer>
             {/* temp link, will link to my portfolio */}
            <Link href="https://github.com/SunnyZaman" target="_blank">Sunny Zaman</Link>
            <img src={GLogo}  alt="G logo" height="20px" width="auto"/>
         </InnerContainer>

        </Wrapper>
    );
}

export default Header;
