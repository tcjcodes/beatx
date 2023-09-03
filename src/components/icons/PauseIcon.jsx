import React from 'react';
import {BiPause} from 'react-icons/bi';
import BaseIcon, {sizePropType} from './BaseIcon';

const PauseIcon = ({size}) => <BaseIcon size={size}><BiPause/></BaseIcon>;

export default PauseIcon;

PauseIcon.propTypes = {
  size: sizePropType,
};
