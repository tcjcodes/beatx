import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TrackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border: ${props => props.$active ? '2px solid #fff' : 'none'};
`;
const Track = ({active, title, date}) => (
    <TrackContainer $active={active}>
      <span>{title}</span>
      <span>{date ? date.toLocaleDateString('en-US',
          {day: '2-digit', year: 'numeric', month: '2-digit'}) : ''}</span>
    </TrackContainer>
);

export default Track;

Track.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};
