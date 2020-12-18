import React, { useState } from 'react';
import { Header } from './components';
import styled from 'styled-components'


function App() {
  const [currentPage, setCurrentPage] = useState('all');
   
  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage}/>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`

export default App;
