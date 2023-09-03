import React, {useState} from 'react';
// import ReactPlayer from 'react-player/soundcloud';
import styled from 'styled-components';
import IconButton from './IconButton';
import PauseIcon from './icons/PauseIcon';
import PreviousIcon from './icons/PreviousIcon';
import PlayIcon from './icons/PlayIcon';
import NextIcon from './icons/NextIcon';
import Seeker from './Seeker';
import MainSection from './MainSection';
// const SOUNDCLOUD_URL = ['https://soundcloud.com/gunna/sets/wunna?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'];

const PlayerContainer = styled(MainSection)`
  margin-top: 70%;
  margin-bottom: ${8 * 12}px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 160px;
  //border: 1px solid yellow;
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
const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  return (
      <PlayerContainer>
        <Title>average sized beats</Title>

        <Controls>
          {/*/*<ReactPlayer url={SOUNDCLOUD_URL}/>*/}
          <Control>
            <IconButton
                name="previous"
                onClick={() => console.log('clicked')}><PreviousIcon size="sm"/></IconButton>
          </Control>

          <Control>
            <IconButton name={playing ? 'Pause' : 'Play'}
                        onClick={() => setPlaying(
                            wasPlaying => !wasPlaying)}>
              {playing ? <PauseIcon size="md"/> : <PlayIcon size="md"/>}
            </IconButton>
          </Control>

          <Control><IconButton name="next"><NextIcon
              size="sm"/></IconButton></Control>
        </Controls>

        <SeekerWrapper><Seeker/></SeekerWrapper>
      </PlayerContainer>
  );
};

export default MusicPlayer;

MusicPlayer.propTypes = {};
