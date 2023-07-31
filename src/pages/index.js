import React from 'react';
import Layout from "../components/layout";

const IndexPage = () => {
  return (<Layout>
    <div className="container">
      <div className="player"
           style={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             border: '3px solid green',
             padding: '2em',
             textAlign: 'center',
             width: '300px',
           }}>
        <p>hello world</p>
      </div>
    </div>
  </Layout>)
}

export default IndexPage

export const Head = () => <title>beatx</title>
