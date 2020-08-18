import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    // position: absolute;
    // bottom: 0px;
    width:100%;
    color: rgba(0,0,0,.54);
    background: #f2f2f2;
    border-top: 1px solid #e4e4e4;
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 15px;
`;
function Footer() {
    return (
        <FooterWrapper>
            <TextWrapper>
            <p>Canada</p>
            <p>2020</p>
            </TextWrapper>
        </FooterWrapper>
    );
}

export default Footer;
