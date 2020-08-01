import React from 'react';
import { GLogo } from '../assets/images';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height:47px;
  border-bottom: 1px solid black
`;
const Link = styled.a`
    font-size: 13px
`;

function Header() {
    return (
        <Wrapper>
            <Link>Header</Link>
            <img src={GLogo}  alt="G logo" height="20px" width="auto"/>

        </Wrapper>
    );
}

export default Header;
