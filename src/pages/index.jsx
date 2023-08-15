import React from 'react';
import Layout from '../components/layout';
import MusicPlayer from '../components/MusicPlayer';
import TrackList from '../components/TrackList';
import styled from 'styled-components';

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: ${768 + 16}px;
  height: 100vh;
  padding: 8px;

  border: 1px solid cyan;
`;

const ExpandContainer = styled.section`
  width: 90%;
  text-align: right;
`;
const ExpandText = styled.span`
  font-size: 12px;
`;
const IndexPage = () => {
  return (<Layout>
    <PageContainer>
      <MusicPlayer/>
      <ExpandContainer><ExpandText>expand ↓</ExpandText></ExpandContainer>

      <TrackList/>
    </PageContainer>
  </Layout>);
};

export default IndexPage;

export const Head = () => <title>beatx</title>;
