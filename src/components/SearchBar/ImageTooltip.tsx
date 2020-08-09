import React, { useState } from 'react';
import styled from 'styled-components';
const Tooltip:any = styled.span`
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 7px;
    position: absolute;
    // border: 0.5px solid #ffff;
    box-shadow: 0 0 5px #000;
    z-index: 1;
    top: ${(props:any)=>props.toolTipProps.top};
    left: ${(props:any)=>props.toolTipProps.left};
    width: ${(props:any)=>props.toolTipProps.width};
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
    const { container: ImageContainer, imageComponent: ImageComp, icon, altText, iconHeight, iconWidth, tooltipText, toolTipProps, setValue } = props.imageObject;
    const [isShown, setIsShown] = useState(false);

    return (
        <ImageContainer>
            <ImageComp src={icon} tabIndex={0} alt={altText} height={iconHeight} width={iconWidth} onClick={setValue}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onFocus={() => setIsShown(true)} 
                onBlur={() => setIsShown(false)} 
                />
            {isShown && <Tooltip toolTipProps={toolTipProps}>{tooltipText}</Tooltip>}
        </ImageContainer>
    );
}

export default ImageTooltip;
