import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';

const ExpandContainer = styled(MainSection)`
  text-align: right;
  // border-width alignment:
  margin-right: 2px;
`;
const ExpandText = styled.span`
  font-size: 12px;
`;
const Expand = ({expanded}) => <ExpandContainer><ExpandText>
  {expanded ? 'collapse ↑' : 'expand ↓'}</ExpandText></ExpandContainer>
;

export default Expand;

Expand.propTypes = {
  expanded: PropTypes.bool,
};
