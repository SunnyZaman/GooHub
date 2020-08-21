import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageTooltip from '../ImageTooltip';
import { MicIcon } from '../../../assets/images';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const MicContainer = styled.div`
  position: relative;
  `;
const MicImage = styled.img`
  outline:none;
  cursor:pointer;
  `;
function Microphone(props: any) {
  const { transcript, listening, finalTranscript } = useSpeechRecognition()
const { setValue } = props;

  const startListening = () => {
    SpeechRecognition.startListening();
  };
  useEffect(() => {
    if (finalTranscript !== undefined && finalTranscript !== null && finalTranscript !== "") {
      filterToggle(MicImage, false);
    }
  }, [finalTranscript])
  useEffect(() => {
    if (transcript !== undefined && transcript !== null && transcript !== "") {
      setValue(transcript);
    }
    // eslint-disable-next-line
  }, [transcript]);

  useEffect(() => {
    if (listening !== undefined) {
      if (listening) {
        filterToggle(MicImage, true);
      }
    }
  }, [listening]);
  const filterToggle = (img: any, val: any) => {
    const imgElement: any = document.querySelector("." + img.styledComponentId);
    if (imgElement !== null) {
      imgElement.style.filter = val ? "invert(10%) sepia(90%) saturate(5213%) hue-rotate(357deg) brightness(104%) contrast(97%)" : "none";
    }
  }
  const imageObject = {
    container: MicContainer,
    imageComponent: MicImage,
    icon: MicIcon,
    altText: "Microphone Icon",
    iconHeight: "20px",
    iconWidth: "auto",
    tooltipText: "Search by voice",
    toolTipProps: { top: "45px", left: "-47px", width: "93px" },
    setValue: startListening
  };
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  return (
    <ImageTooltip imageObject={imageObject} />
  );
}

export default Microphone;