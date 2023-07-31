import React from 'react';
// import ReactPlayer from 'react-player/soundcloud';
import styled from 'styled-components';
import RewindIcon from './icons/RewindIcon';
import PlayIcon from './icons/PlayIcon';
import FastForwardIcon from './icons/FastForwardIcon';

// const SOUNDCLOUD_URL = ['https://soundcloud.com/gunna/sets/wunna?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'];

const PlayerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid green;
  padding: 2em;
  text-align: center;
  width: 750px;
`;
const Icon = styled.div`
  font-size: 32px;
  padding: 0.75em;
  color: white;
`;
const Title = styled.p`
  //font-weight: bold;
  letter-spacing: 0.2em;
  margin-bottom: 24px;
`;
const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  margin: 0 auto;
`;

const Seeker = styled.span``;
const MusicPlayer = () => (
    <PlayerContainer>
      <Title>beatx</Title>

      <Controls>

        {/*/*<ReactPlayer url={SOUNDCLOUD_URL}/>*/}
        <Icon style={{fontSize: '24px'}}><RewindIcon/></Icon>
        <Icon>
          <PlayIcon/>
        </Icon>
        <Icon style={{fontSize: '24px'}}><FastForwardIcon/></Icon>
      </Controls>

      <Seeker>01:30</Seeker>
    </PlayerContainer>
);

export default MusicPlayer;

MusicPlayer.propTypes = {};
