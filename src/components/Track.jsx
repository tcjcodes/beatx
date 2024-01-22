import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TrackContainer = styled.a`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm};
  border: ${props => props.$active ? `2px solid ${props.theme.color}` : 'none'};

  text-decoration: none;
  color: ${props => props.theme.color};
`;
const Track = ({active, title, date, onClick}) => (
    <TrackContainer title={title} href="" onClick={onClick} $active={active}>
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
  onClick: PropTypes.func,
};
