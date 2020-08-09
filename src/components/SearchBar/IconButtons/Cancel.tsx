import React from 'react';
import styled from 'styled-components';
import ImageTooltip from '../ImageTooltip';
import { CancelIcon } from '../../../assets/images';

const CancelContainer = styled.div`
    position: relative;
`;
const CancelImage = styled.img`
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    filter: invert(58%) sepia(10%) saturate(213%) hue-rotate(165deg) brightness(88%) contrast(87%);
`;
function Cancel(props: any) {
    const clearSearch = () => {        
        props.setValue("");
    };
    const imageObject = {
        container: CancelContainer,
        imageComponent: CancelImage,
        icon: CancelIcon,
        altText: "Cancel Icon",
        iconHeight: "15px",
        iconWidth: "auto",
        toolTipProps:{top:"42px", left:"-18px", width:"34px"},
        tooltipText: "Clear",
        setValue: clearSearch
    };
    return (
        <ImageTooltip imageObject={imageObject} />
    );
}

export default Cancel;