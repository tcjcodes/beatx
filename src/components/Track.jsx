import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TrackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border: ${props => props.$active ? '2px solid #fff' : 'none'};
`;
const Track = ({title, date}) => (
    <TrackContainer $active={date === '12/1/2023'}>
      <span>{title}</span>
      <span>{new Date(date).toLocaleDateString()}</span>
    </TrackContainer>
);

export default Track;

Track.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};
