import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {IconContext} from 'react-icons';

const StyleWrapper = styled.span`
  color: ${props => props.theme.color};
`;

const BaseIcon = ({size, children}) => {
  let sizePx = size === 'sm' ? '32px' : '42px';
  return (<IconContext.Provider value={{size: sizePx}}>
    <StyleWrapper>{children}</StyleWrapper>
  </IconContext.Provider>);
};

export default BaseIcon;

export const sizePropType = PropTypes.oneOf(['sm', 'md']);
BaseIcon.propTypes = {
  size: sizePropType,
};
