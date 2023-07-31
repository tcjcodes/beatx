import React from 'react';
// import ReactPlayer from 'react-player/soundcloud';
import styled from 'styled-components';
import RewindIcon from './icons/RewindIcon';
import PlayIcon from './icons/PlayIcon';
import FastForwardIcon from './icons/FastForwardIcon';

// const SOUNDCLOUD_URL = ['https://soundcloud.com/gunna/sets/wunna?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'];

const Icon = styled.span`
  font-size: 48px;
  padding: 0.75em;
  color: white;
`;

const MusicPlayer = () => <div>
  {/*/*<ReactPlayer url={SOUNDCLOUD_URL}/>*/}
  <Icon><RewindIcon/></Icon>
  <Icon>
    <PlayIcon/>
  </Icon>
  <Icon><FastForwardIcon/></Icon>

</div>;

export default MusicPlayer;

MusicPlayer.propTypes = {};
