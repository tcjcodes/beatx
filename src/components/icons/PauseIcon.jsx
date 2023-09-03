import React from 'react';
import PropTypes from 'prop-types';
import {GiPauseButton} from 'react-icons/gi';
import BaseIcon from './BaseIcon';

const PauseIcon = ({size}) => <BaseIcon size={size}><GiPauseButton/></BaseIcon>;

export default PauseIcon;

PauseIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};
