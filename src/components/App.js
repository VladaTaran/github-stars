import React, { Component } from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

const Main = styled.div`
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`
const Header = styled.div`
  display: block;
  background-color: #24292e;
  padding: 12px 0;
  text-align: left;
`

const Title = styled.p`
  margin: 0 auto;
  text-align: center;
  color: hsla(0,0%,100%,.7);
`

class App extends Component {

  render() {
    return (
      <Main>
        <Header>
          <div style={{color: 'white', alignItems: 'center', display: 'flex'}}>
            <GoMarkGithub style={{color: 'white', height: '32px', width: '32px', paddingLeft:'40px'}}/>
            <Title>Git Hub Stars</Title>
          </div>
        </Header>
        <Stars />
      </Main>
    );
  }
}

export default App;
