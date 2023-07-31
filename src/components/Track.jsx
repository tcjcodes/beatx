import React from 'react';

const TrackContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Track = ({title, date}) => <div><span>{title}</span> <span>{date}</span>
</div>;

export default Track;

Track.propTypes = {};
