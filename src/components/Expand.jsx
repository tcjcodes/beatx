import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';

const ExpandContainer = styled(MainSection)`
  text-align: right;
  // align with Track border:
  margin-right: 2px;
`;
const ExpandBtn = styled.button.attrs({
  type: 'button',
})`
  background: black;
  color: white;
  border: none;
  font-size: 12px;
  cursor: pointer;
`;

const ExpandableContent = styled.div`
  visibility: ${props => props.$expanded ? 'visible' : 'hidden'};
`;
const Expand = ({onClick, children}) => {
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

export default Expand;

Expand.propTypes = {
  onClick: PropTypes.func,
};
