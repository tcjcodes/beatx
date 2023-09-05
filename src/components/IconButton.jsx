import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

const IconButton = ({onClick, name, children}) => <StyledButton
    type="button"
    name={name}
    onClick={onClick}>
  {children}
</StyledButton>;

export default IconButton;

IconButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
