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
  border-bottom: 1px solid black
`;
function Header() {
    return (
        <Wrapper>
            <h1>Header</h1>
            <img src={GLogo}  alt="G logo" height="44.57px" width="auto"/>

        </Wrapper>
    );
}

export default Header;
