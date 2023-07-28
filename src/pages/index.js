import React from 'react';
import Layout from "../components/layout";

const IndexPage = () => {
  return (<Layout>
    <div className="container" style={{
      height: '200px',
      position: 'relative',
      // border: '1px solid grey'
    }}>
      <div className="player"
           style={{

             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             // height: '200px',
             border: '3px solid green',
             padding: '2em',
             textAlign: 'center',
           }}>
        <p>hello world</p>
      </div>
    </div>
    {/*<div style={{
      margin: 'auto',
      width: '50%',
      border: '2px solid white',
      padding: '2em',
      textAlign: 'center'
    }}>hello world
    </div>*/}
  </Layout>)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
