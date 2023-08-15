import React from 'react';
import styled from 'styled-components';
import songs from '../data/songs.json';
import Track from './Track';

const TrackListContainer = styled.section`
  border: 1px solid grey;
  width: 768px;
  padding: 8px 16px;
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
