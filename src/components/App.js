import React, { Component } from 'react';
import GitHubStars from '../containers/GitHubStars';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.div`
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`
class App extends Component {

  render() {
    return (
      <Main>
        <Header />
        <GitHubStars />
      </Main>
    );
  }
}

export default App;
