import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0px;
    width:100%
`;
function Footer() {
    return (
        <FooterWrapper>
            <h1>Footer</h1>
        </FooterWrapper>
    );
}

export default Footer;
