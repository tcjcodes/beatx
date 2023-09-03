import React from 'react';
import {BiSkipPrevious} from 'react-icons/bi';
import BaseIcon, {sizePropType} from './BaseIcon';

const PreviousIcon = ({size}) => (
    <BaseIcon size={size}>
      <BiSkipPrevious/>
    </BaseIcon>
);

export default PreviousIcon;

PreviousIcon.propTypes = {
  size: sizePropType,
};
