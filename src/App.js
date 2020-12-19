import React, { useState } from 'react';
import { Header, Form } from './components';
import styled from 'styled-components'


function App() {
  const [currentPage, setCurrentPage] = useState('all');
   
  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage}/>
      <Form />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`

export default App;
