import React, {useContext} from 'react';
import styled from 'styled-components';
import {MusicContext} from './MusicContext';
import Track from './Track';
import MainSection from './MainSection';

const TrackListContainer = styled(MainSection)`
  width: ${props => props.theme.mainWidth};
  padding: ${props => props.theme.spacing.xs} 0;
`;

const getTrackDate = ({created_at, display_date, last_modified}) => {
  const date = display_date || last_modified || created_at;
  return date ? new Date(date) : null;
};

const TrackList = () => {
  const {
    musicState: {
      tracks,
      currentTrackIndex,
    },
    setCurrentTrackIndex,
  } = useContext(
      MusicContext);
  console.debug('tracks', tracks, 'index', currentTrackIndex);

  const makeTrackClickHandler = (index) => () => {
    console.info('track clicked', index);
    setCurrentTrackIndex(index);
  };
  return (<TrackListContainer>
    {tracks.map((track, i) => <Track
        key={track.id}
        active={i === currentTrackIndex}
        title={track.title || '-'}
        date={getTrackDate(track)}
        onClick={makeTrackClickHandler(i)}
    />)}
  </TrackListContainer>);
};

export default TrackList;

TrackList.propTypes = {};
