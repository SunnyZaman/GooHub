import React, { useState } from 'react';
import styled from 'styled-components';
const Tooltip = styled.span`
    // visibility: visible;
    // width: 180px;
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 7px;
    position: relative;
    // border: 0.5px solid #ffff;
    box-shadow: 0 0 5px #000;
    z-index: 1;
    top: 53px;
    left: 62%;
    margin-left: -60px;
    font-size: 12px;
    font-weight:600;
    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
      };
`;
function ImageTooltip(props: any) {
    const { imageContainer: ImageContainer, imageComp: ImageComp, icon, altText, iconHeight, iconWidth, tooltipText } = props;
    const [isShown, setIsShown] = useState(false);

    return (
        <ImageContainer>
            <ImageComp src={icon} tabIndex={0} alt={altText} height={iconHeight} width={iconWidth} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}/>
            {isShown &&<Tooltip>{tooltipText}</Tooltip> }
        </ImageContainer>
    );
}

export default ImageTooltip;
