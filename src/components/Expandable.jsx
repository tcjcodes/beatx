import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';

const ExpandContainer = styled(MainSection)`
  text-align: right;
  // align with Track border:
  margin-right: 2px;
  //border: 1px solid orange;
`;

const ExpandBtn = styled.button.attrs(props => ({
  type: 'button',
  ['aria-expanded']: !!props.$expanded,
}))`
  background: none;
  color: ${props => props.theme.color};
  border: none;
  font-size: ${props => props.theme.bodyFont};
  font-family: ${props => props.theme.fontFamily};
  cursor: pointer;
`;

const ExpandableContent = styled.div`
  visibility: ${props => props.$expanded ? 'visible' : 'hidden'};
  opacity: ${props => props.$expanded ? 1 : 0};
  animation: fadeIn 1s linear;
  transition: opacity 0.5s linear;
`;

const Expandable = ({onClick, children}) => {

  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(curExpanded => !curExpanded);
    onClick && onClick(expanded);
  };

  return (
      <ExpandContainer><ExpandBtn onClick={handleExpanded}>
        {expanded ? 'less ↑' : 'more ↓'}</ExpandBtn>
        <ExpandableContent $expanded={expanded}>{children}</ExpandableContent>
      </ExpandContainer>)
      ;
};

export default Expandable;

Expandable.propTypes = {
  onClick: PropTypes.func,
};
