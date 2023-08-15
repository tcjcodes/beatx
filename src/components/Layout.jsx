import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';

const LayoutWrapper = styled.div`
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.bodyFont};
`;

export default function Layout({children}) {
  return <ThemeProvider theme={theme}><LayoutWrapper>{children}</LayoutWrapper></ThemeProvider>;
}
