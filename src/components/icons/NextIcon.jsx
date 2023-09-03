import React from 'react';
import {BiSkipNext} from 'react-icons/bi';
import BaseIcon, {sizePropType} from './BaseIcon';

const NextIcon = ({size}) => (
    <BaseIcon size={size}>
      <BiSkipNext/>
    </BaseIcon>
);

export default NextIcon;

NextIcon.propTypes = {
  size: sizePropType,
};
