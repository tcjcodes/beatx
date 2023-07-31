import React from 'react';
import Layout from '../components/layout';
import MusicPlayer from '../components/MusicPlayer';

const IndexPage = () => {
  return (<Layout>
    <div className="container">
      <MusicPlayer/>
    </div>
  </Layout>)
}

export default IndexPage

export const Head = () => <title>beatx</title>
