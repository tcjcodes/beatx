import React from 'react';
import Expandable from '../components/Expandable';
import Layout from '../components/layout';
import MusicPlayer from '../components/MusicPlayer';
import TrackList from '../components/TrackList';
import styled from 'styled-components';

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
    <IndexContainer>
      <MusicPlayer
          url="https://soundcloud.com/polo-g/sets/polo-g?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"/>
      <Expandable onClick={(expanded) => console.log('expanded? ' + expanded)}>
        <TrackList/>
      </Expandable>
    </IndexContainer>
  </Layout>);
};

export default IndexPage;

export const Head = () => <title>beatx</title>;
