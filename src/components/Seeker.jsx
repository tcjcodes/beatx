import React from 'react';
import styled from 'styled-components';

/**
 * Slider CSS adapted from:
 * @source https://codepen.io/RajanLad/pen/MWaEyNp
 */
const SLIDER_HEIGHT_PX = 16;

const SeekerContainer = styled.div`
`;
const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const Slider = styled.input.attrs(props => ({
  type: 'range',
  min: 0,
  max: 100,
  value: props.value,
}))`
  position: absolute;
  top: -2px;
  -webkit-appearance: none;
  width: 100%;
  height: ${SLIDER_HEIGHT_PX}px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  outline: none;
  opacity: 1;
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const CompletionBar = styled.div`
  position: relative;
  top: 0;
  width: 50%;
  height: ${SLIDER_HEIGHT_PX}px;
  background-color: rgba(255, 255, 255, 1.0);
  z-index: 0;
`;

const TimestampContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 0.85em;
`;

const Seeker = () => <SeekerContainer>
  <SliderContainer>
    <Slider
        value={26}/>
    <CompletionBar/>
  </SliderContainer>
  <TimestampContainer>
    <span>01:26</span>
    <span>02:18</span>
  </TimestampContainer>
</SeekerContainer>;

export default Seeker;

Seeker.propTypes = {};
