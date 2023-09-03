import React from 'react';
import PropTypes from 'prop-types';
import {BiSkipPrevious} from 'react-icons/bi';
import BaseIcon from './BaseIcon';

const RewindIcon = ({size}) => (
    <BaseIcon size={size}>
      <BiSkipPrevious/>
    </BaseIcon>
);

export default RewindIcon;

RewindIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};
