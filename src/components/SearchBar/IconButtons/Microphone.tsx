import React from 'react';
import styled from 'styled-components';
import ImageTooltip from '../ImageTooltip';
import { MicIcon } from '../../../assets/images';

const MicContainer = styled.div`
  position: absolute;
  right: 47px;
  top: 19px;
  `;
const MicImage = styled.img`
  outline:none;
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
        toolTipProps:{left:"-47px", width:"93px"},
        setValue: startListening
    };
    return (
        <ImageTooltip imageObject={imageObject} />
    );
}

export default Microphone;