import React from 'react';
import { Header } from './components';
import styled from 'styled-components'


function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`

export default App;
