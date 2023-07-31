import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Player = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid green;
  padding: 2em;
  text-align: center;
  width: 300px;
`;

const IndexPage = () => {
  return (<Layout>
    <div className="container">
      <Player>
        <p>hello world</p>
      </Player>
    </div>
  </Layout>)
}

export default IndexPage

export const Head = () => <title>beatx</title>
