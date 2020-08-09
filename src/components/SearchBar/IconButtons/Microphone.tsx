import React, { useState } from 'react';
import styled from 'styled-components';
import ImageTooltip from '../ImageTooltip';
import { MicIcon } from '../../../assets/images';

const MicContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  `;
const MicImage = styled.img`
  outline:none;
  padding: 9px 8px;
  right:10px;
  position: absolute;
  cursor:pointer
`;
function Microphone(props: any) {
    const startListening = () => {
        console.log("Work");
        
        props.setValue("I was listening");
    };
    const imageObject = {
        container: MicContainer,
        imageComponent: MicImage,
        icon: MicIcon,
        altText: "Microphone Icon",
        iconHeight: "20px",
        iconWidth: "auto",
        tooltipText: "Search by voice",
        setValue: startListening
    };
    return (
        <ImageTooltip imageObject={imageObject} />
    );
}

export default Microphone;