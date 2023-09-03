import React from 'react';
import styled from 'styled-components';
import songs from '../data/songs.json';
import Track from './Track';
import MainSection from './MainSection';

const TrackListContainer = styled(MainSection)`
  //border: 1px solid grey;
  width: ${props => props.theme.mainWidth};
  padding: 8px 0;
`;

const TrackList = () => {
  return (<TrackListContainer>
    {songs.map((song, i) => <Track
        key={song.track}
        title={song.title}
        date={`12/${i + 1}/2023`}/>)}
  </TrackListContainer>);
};

export default TrackList;

TrackList.propTypes = {};
