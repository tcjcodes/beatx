import React, {useContext, useRef, useState} from 'react';
import ReactPlayer from 'react-player/soundcloud';
import styled from 'styled-components';
import IconButton from './IconButton';
import PauseIcon from './icons/PauseIcon';
import PreviousIcon from './icons/PreviousIcon';
import PlayIcon from './icons/PlayIcon';
import NextIcon from './icons/NextIcon';
import {MusicContext} from './MusicContext';
import Seeker from './Seeker';

const PlayerContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //min-height: 160px;

`;
const Control = styled.div`
  font-size: 32px;
  padding: 0.75em;
  color: ${props => props.theme.color};
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
  console.debug('render MusicPlayer');

  const {
    musicState,
    setTracks,
    setCurrentTrackIndex,
  } = useContext(MusicContext);
  const {currentTrack, url} = musicState;
  console.debug('musicState:', musicState);

  const playerRef = useRef();
  const [playerState, setPlayerState] = useState({
    playing: false,
    volume: 0.5,
    played: 0,
    duration: 0,
    seeking: false,
    // buffer: true,
  });
  const {duration, playing, played} = playerState;
  console.debug('playerState:', playerState);

  // Seeker handlers
  const handleSeekMouseDown = () => {
    console.debug('seek mouse down');
    setPlayerState(state => ({...state, seeking: true}));
  };

  const handleSeekChange = (value) => {
    console.debug('seek change', value);
    setPlayerState(state => ({...state, played: value}));
  };

  const handleSeekMouseUp = (value) => {
    console.debug('seek mouse up, seeking to:', value);
    setPlayerState(state => ({...state, seeking: false}));
    playerRef.current.seekTo(value);
  };

  // custom player handlers
  const handlePrevClick = () => {
    console.debug('prev button clicked');
    const internalPlayer = playerRef.current.getInternalPlayer();
    internalPlayer.prev();
  };

  const handleNextClick = () => {
    console.debug('next button clicked');
    const internalPlayer = playerRef.current.getInternalPlayer();
    internalPlayer.next();

    // internalPlayer.getCurrentSound(val => {
    // TODO update current track with current sound object?
    // console.info('current sound', val);
    // });
  };

  const handlePlayerPlay = () => {
    console.debug('player play');
    debugger;
    setPlayerState(state => ({...state, playing: true}));
    const internalPlayer = playerRef.current.getInternalPlayer();
    internalPlayer.getCurrentSoundIndex(index => {
      setCurrentTrackIndex(index);
    });
  };

  const handlePlayerPause = () => {
    console.debug('player pause');
    setPlayerState(state => ({...state, playing: false}));
  };

  const handlePlayPauseClick = () => {
    console.debug('play/pause button clicked');
    setPlayerState(state => ({...state, playing: !state.playing}));
  };

  // react-player handlers
  const handlePlayerReady = () => {
    console.debug('player ready');

    const internalPlayer = playerRef.current.getInternalPlayer();
    internalPlayer.getSounds((soundList) => {
      setTracks(soundList);
    });
    internalPlayer.getCurrentSoundIndex(index => {
      setCurrentTrackIndex(index);
    });
  };

  // TODO ?
  const handlePlayerProgress = (newProgress) => {
    console.debug('player progress:', newProgress);
    // console.log('onProgress', newProgress);
    // We only want to update time slider if we are not currently seeking
    // if (!playerState.seeking) {
    //   setPlayerState(prevState => ({...prevState, progress: newProgress}));
    // }
  };

  const handlePlayerDuration = (newDuration) => {
    console.debug('player duration', newDuration);
    setPlayerState(state => ({...state, duration: newDuration}));
  };

  const handlePlayerError = (err) => {
    console.error('react-player error', err);
  };

  return (
      <PlayerContainer>
        <Title>average sized beats</Title>

        <p>{currentTrack && currentTrack.title}</p>
        <PlayerWrapper>
          <ReactPlayer
              ref={playerRef}
              url={url}
              playing={playing}
              onPlay={handlePlayerPlay}
              onPause={handlePlayerPause}
              onReady={handlePlayerReady}
              onProgress={handlePlayerProgress}
              onDuration={handlePlayerDuration}
              onError={handlePlayerError}
              config={{
                soundcloud: {
                  buying: false,
                  sharing: false,
                  download: false,
                  show_artwork: false,
                  show_playcount: false,
                  show_user: false,
                },
              }}
              style={{
                visibility: 'hidden',
                width: 0,
                height: 0,
              }}
              width="0"
              height="0"
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

          <Control>
            <IconButton name="next" onClick={handleNextClick}><NextIcon
                size="sm"/></IconButton>
          </Control>
        </Controls>

        <SeekerWrapper><Seeker
            played={played}
            duration={duration}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            onMouseDown={handleSeekMouseDown}/></SeekerWrapper>
      </PlayerContainer>
  );
};

export default MusicPlayer;

MusicPlayer.propTypes = {};
