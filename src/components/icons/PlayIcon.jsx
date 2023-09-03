import React from 'react';
import {BiPlay} from 'react-icons/bi';
import BaseIcon, {sizePropType} from './BaseIcon';

const RewindIcon = ({size}) => (
    <BaseIcon size={size}>
      <BiPlay/>
    </BaseIcon>
);

export default RewindIcon;

RewindIcon.propTypes = {
  size: sizePropType,
};
