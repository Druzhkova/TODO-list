import React, { useCallback, useState } from 'react';
import { Header, Form, TodoItem } from './components';
import styled from 'styled-components'


function App() {
  const [currentPage, setCurrentPage] = useState('all');
  const [todos, setTodos] = useState([]); // { title: '', isCompleted: false/true }
   
  const addTodo = useCallback((inputValue) => {
    setTodos((prev) => [...prev, { title: inputValue, isCompleted: false }])
  }, []);

  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage}/>
      <Form onSubmit={addTodo}/>
      {
        todos.map(( todo ) => <TodoItem {...todo} />) // title={ todo.title } isCompleted={ todo.isCompleted }
      }
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App;
