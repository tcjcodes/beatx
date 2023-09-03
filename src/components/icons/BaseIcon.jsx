import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {IconContext} from 'react-icons';

const StyleWrapper = styled.span`
  color: #fff;
`;

const BaseIcon = ({size, children}) => {
  let sizePx = size === 'sm' ? '32px' : '42px';
  return (<IconContext.Provider value={{size: sizePx}}>
    <StyleWrapper>{children}</StyleWrapper>
  </IconContext.Provider>);
};

export default BaseIcon;

BaseIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};
