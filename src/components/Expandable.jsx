import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  text-align: right;
`;

const ExpandBtn = styled.button.attrs(() => ({
  type: 'button',
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

const Expandable = ({defaultExpanded, onClick, children}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const handleExpanded = () => {
    setExpanded(curExpanded => !curExpanded);
    onClick && onClick(expanded);
  };

  return (
      <React.Fragment>
        <ButtonWrapper>
          <ExpandBtn onClick={handleExpanded}>
            {expanded ? 'less ↑' : 'more ↓'}
          </ExpandBtn>
        </ButtonWrapper>
        <ExpandableContent $expanded={expanded}>{children}</ExpandableContent>
      </React.Fragment>)
      ;
};

export default Expandable;

Expandable.propTypes = {
  /**
   * is this expanded by default? Initial state.
   */
  defaultExpanded: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
