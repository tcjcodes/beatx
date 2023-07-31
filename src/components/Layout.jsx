import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  color: #fff;
  font-family: "Roboto Mono", Menlo, monospace;
  font-size: 12px;
`;

export default function Layout({children}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
