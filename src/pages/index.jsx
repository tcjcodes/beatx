import React from 'react';
import styled from 'styled-components';
import HomePageContent from '../components/HomePageContent';
import Layout from '../components/layout';
import {MusicContextProvider} from '../components/MusicContext';

const IndexContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: ${props => props.theme.mainWidth};
  height: 100vh;
  padding: ${props => props.theme.spacing.xs};
`;

const IndexPage = () => {
  return (<Layout>
    <MusicContextProvider>
      <IndexContainer>
        <HomePageContent/>
      </IndexContainer>
    </MusicContextProvider>
  </Layout>);
};

export default IndexPage;

export const Head = () => <title>beatx</title>;
