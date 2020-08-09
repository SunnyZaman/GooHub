import React from 'react';
import styled, { keyframes } from 'styled-components';
const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height:100%
`;
const bounce = keyframes`
    50% {
        transform: translateY(25px);
    }
`;
const Dot: any = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 11px;
    margin: 0 10px;
    animation: ${bounce} 2s ease infinite;
    background-color: ${(props:any)=>props.color};
    animation-delay: ${(props:any)=>props.delay};
`;
function Loader() {
    return (
        <LoadingWrapper>
            <Dot color="#4285F5" delay="0s"/>
            <Dot color="#EA4436" delay=".25s"/>
            <Dot color="#FBBD06" delay=".5s"/>
            <Dot color="#34A952" delay=".75s"/>
        </LoadingWrapper>
    );
}

export default Loader;
