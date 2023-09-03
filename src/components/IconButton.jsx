import React from 'react';
import {Icon} from 'react-bulma-components';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  font-size: ${props => props.$size === 'sm' ? '24px' : '32px'}
`;
const IconButton = ({onClick, name, children, size}) => <StyledButton
    type="button"
    name={name}
    onClick={() => {
      console.log('clicked button');
      onClick();
    }}>
  <StyledIcon $size={size}>{children}</StyledIcon></StyledButton>;

export default IconButton;

IconButton.propTypes = {};
