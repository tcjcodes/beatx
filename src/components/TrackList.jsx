import React from 'react';
import styled from 'styled-components';

const TrackListContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
`;

;
const TrackList = () => <TrackListContainer>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <TrackList
      key={i}
      title={`M` + i}
      date={`12/${i}/2023`}/>)}
</TrackListContainer>;

export default TrackList;

TrackList.propTypes = {};
