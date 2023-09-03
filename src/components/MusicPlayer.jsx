import React, {useRef, useState} from 'react';
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
  const playerRef = useRef(null);
  const [playerState, setPlayerState] = useState({
    playing: false,
    // muted: false,
    volume: 0.5,
    played: 0,
    duration: 0,
    seeking: false,
    Buffer: true,
  });
  const {duration, playing, played} = playerState;

  const handleSeek = (percentValue) => {
    console.log('seeked to', percentValue);
    const newDuration = parseFloat(percentValue);
    setPlayerState(state => ({...state, duration: newDuration}));
    playerRef.current.seekTo(newDuration / 100, 'fraction');
  };
  const handlePrevClick = () => {
  };
  const handleNextClick = () => {
  };
  const handlePlayPauseClick = () => {
    setPlayerState(state => ({...state, playing: !state.playing}));
  };

  return (
      <PlayerContainer>
        <Title>average sized beats</Title>

        <PlayerWrapper>
          <ReactPlayer
              ref={playerRef}
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
                onClick={handlePrevClick}><PreviousIcon
                size="sm"/></IconButton>
          </Control>

          <Control>
            <IconButton name={playing ? 'Pause' : 'Play'}
                        onClick={handlePlayPauseClick}>
              {playing ? <PauseIcon size="md"/> : <PlayIcon size="md"/>}
            </IconButton>
          </Control>

          <Control><IconButton name="next" onClick={handleNextClick}><NextIcon
              size="sm"/></IconButton></Control>
        </Controls>

        <SeekerWrapper><Seeker
            played={played}
            duration={duration}
            onChange={handleSeek}/></SeekerWrapper>
      </PlayerContainer>
  );
};

export default MusicPlayer;

MusicPlayer.propTypes = {};
