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
  padding: 9px 8px;
  right:10px;
  position: absolute;
  cursor:pointer
`;
function Microphone(props: any) {
    const imageObject = {
        
    };
    return (
        <ImageTooltip imageContainer={MicContainer} imageComp={MicImage} icon={MicIcon} altText={"Mic Icon"}
            iconHeight={"20px"} iconWidth={"auto"} tooltipText={"Search by voice"} />
    );
}

export default Microphone;