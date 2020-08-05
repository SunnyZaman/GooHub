import React, { useState } from 'react';
import styled from 'styled-components';

function ImageTooltip(props: any) {
    const { tooltip:Tooltip, imageContainer: ImageContainer, imageComp: ImageComp, icon, altText, iconHeight, iconWidth, tooltipText } = props;

    return (
        <ImageContainer>
            <ImageComp src={icon} tabIndex={0} alt={altText} height={iconHeight} width={iconWidth} />
            <Tooltip>{tooltipText}</Tooltip>
        </ImageContainer>
    );
}

export default ImageTooltip;
