import React, {useContext} from 'react';
import styled from 'styled-components';
import {MusicContext} from './MusicContext';
import Track from './Track';
import MainSection from './MainSection';

const TrackListContainer = styled(MainSection)`
  //border: 1px solid grey;
  width: ${props => props.theme.mainWidth};
  padding: 8px 0;
`;

const getTrackDate = ({created_at, display_date, last_modified}) => {
  const date = display_date || last_modified || created_at;
  return date ? new Date(date) : null;
};

const TrackList = () => {
  const {musicState: {tracks, currentTrackIndex}} = useContext(
      MusicContext);
  console.debug('tracks', tracks, 'index', currentTrackIndex);

  return (<TrackListContainer>
    {tracks.map((track, i) => <Track
        key={track.id}
        active={i === currentTrackIndex}
        title={track.title || '-'}
        date={getTrackDate(track)}/>)}
  </TrackListContainer>);
};

export default TrackList;

TrackList.propTypes = {};
