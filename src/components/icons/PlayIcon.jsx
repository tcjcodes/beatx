import React from 'react';
import PropTypes from 'prop-types';
import BaseIcon from './BaseIcon';
import {BiPlay} from 'react-icons/bi';

const RewindIcon = ({size}) => (
    <BaseIcon size={size}>
      <BiPlay/>
    </BaseIcon>
);

export default RewindIcon;

RewindIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};
