import React, {useState} from 'react';
import ReactPlayer from 'react-player/soundcloud';
import styled from 'styled-components';
import IconButton from './IconButton';
import PauseIcon from './icons/PauseIcon';
import PreviousIcon from './icons/PreviousIcon';
import PlayIcon from './icons/PlayIcon';
import NextIcon from './icons/NextIcon';
import Seeker from './Seeker';
import MainSection from './MainSection';

const SOUNDCLOUD_URL = ['https://soundcloud.com/gunna/sets/wunna?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'];

const PlayerContainer = styled(MainSection)`
  margin-top: 70%;
  margin-bottom: ${8 * 12}px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 160px;
`;
const Control = styled.div`
  font-size: 32px;
  padding: 0.75em;
  color: white;
`;
const Title = styled.h3`
  //letter-spacing: 0.1em;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  margin: 0 auto;
`;

const SeekerWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  padding: 0 24px;
`;

const PlayerWrapper = styled.div`
`;
const MusicPlayer = () => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    // muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const {playing} = playerState;

  const previousHandler = () => {
  };
  const nextHandler = () => {
  };
  const playPauseHandler = () => {
    setPlayerState(state => ({...state, playing: !state.playing}));
  };

  return (
      <PlayerContainer>
        <Title>average sized beats</Title>

        <PlayerWrapper>
          <ReactPlayer
              url={SOUNDCLOUD_URL}
              width="100%"
              height="100%"
              playing={playing}
          />
        </PlayerWrapper>

        <Controls>
          <Control>
            <IconButton
                name="previous"
                onClick={previousHandler}><PreviousIcon
                size="sm"/></IconButton>
          </Control>

          <Control>
            <IconButton name={playing ? 'Pause' : 'Play'}
                        onClick={playPauseHandler}>
              {playing ? <PauseIcon size="md"/> : <PlayIcon size="md"/>}
            </IconButton>
          </Control>

          <Control><IconButton name="next" onClick={nextHandler}><NextIcon
              size="sm"/></IconButton></Control>
        </Controls>

        <SeekerWrapper><Seeker/></SeekerWrapper>
      </PlayerContainer>
  );
};

export default MusicPlayer;

MusicPlayer.propTypes = {};
