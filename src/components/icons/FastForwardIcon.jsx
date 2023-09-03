import React from 'react';
import PropTypes from 'prop-types';
import {BiSkipNext} from 'react-icons/bi';
import BaseIcon from './BaseIcon';

const FastForwardIcon = ({size}) => (
    <BaseIcon size={size}>
      <BiSkipNext/>
    </BaseIcon>
);

export default FastForwardIcon;

FastForwardIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};
