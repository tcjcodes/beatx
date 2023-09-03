import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Duration from './Duration';

const SEEKER_MAX = 0.999999;
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

const thumbCss = css`
  box-shadow: none;
  border: none;
  height: 16px;
  width: 8px;
  border-radius: 0;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
`;
const SliderInput = styled.input.attrs(() => ({
  type: 'range',
  min: 0,
  max: SEEKER_MAX,
  step: 'any',
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

  &:focus, &:hover, &:active {
    box-shadow: inherit;
  }

  &::-webkit-slider-thumb {
    box-shadow: none;
    border: none;
    height: 16px;
    width: 8px;
    border-radius: 0;
    background: #ffffff;
    cursor: pointer;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }

  &::-moz-range-thumb {
    box-shadow: none;
    border: none;
    height: 16px;
    width: 8px;
    border-radius: 0;
    background: #ffffff;
    cursor: pointer;

  }

  &::-ms-thumb {
    box-shadow: none;
    border: none;
    height: 16px;
    width: 8px;
    border-radius: 0;
    background: #ffffff;
    cursor: pointer;
  }
`;

const CompletionBar = styled.div`
  position: relative;
  top: 0;
  width: ${props => `${props.value}%`};

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

const Seeker = ({duration, played, onChange, setSeeking}) => {
  console.log('duration', duration);
  const [value, setValue] = useState(0);

  const handleMouseDown = (e) => {
    // this.setState({ seeking: true })
    setSeeking(true);
  };

  const handleMouseUp = (e) => {
    // this.setState({ seeking: false })
    // this.player.seekTo(parseFloat(e.target.value))
    setSeeking(false);

    const value = parseFloat(e.target.value);
    onChange && onChange(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);

    const value = parseFloat(e.target.value);
    onChange && onChange(value);
  };

  const elapsedSecs = duration * played;
  const remainingSecs = duration * (1 - played);

  return (<SeekerContainer>
    <SliderContainer>
      <SliderInput
          onChange={handleChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          value={value}/>
      <CompletionBar value={value}/>
    </SliderContainer>
    <TimestampContainer>
      <span><Duration
          seconds={elapsedSecs}/></span>
      <span><Duration
          seconds={remainingSecs}/></span>
    </TimestampContainer>
  </SeekerContainer>);
};

export default Seeker;

Seeker.propTypes = {
  duration: PropTypes.number,
  played: PropTypes.number,
  onChange: PropTypes.func,
};
