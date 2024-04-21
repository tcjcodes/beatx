import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TrackButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm};
  border-color: ${props => props.$active ? props.theme.color
          : props.theme.background};
  border-width: 2px;
  border-style: solid;

  //text-decoration: none;
  background: none;
  width: 100%;
  color: ${props => props.theme.color};

  // FIXME: Should onClick not be used? Or have handler figure it out?
  cursor: ${props => props.$active ? 'inherit' : 'pointer'};
  font-family: ${props => props.theme.fontFamily};
`;
const Track = ({active, title, date, onClick}) => (
    <TrackButton title={title} onClick={onClick} $active={active}>
      <span>{title}</span>
      <span>{date ? date.toLocaleDateString('en-US',
          {day: '2-digit', year: 'numeric', month: '2-digit'}) : ''}</span>
    </TrackButton>
);

export default Track;

Track.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
};
