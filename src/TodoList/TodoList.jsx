import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Header, Form, TodoItem } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addTodoActions, changeTodoCompletionStatus, deleteTodoActions, changeCurrentPage } from "./actions";
import { useLocation, Route, Switch } from "react-router-dom"


export function TodoList() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.todoList.currentPage);
  const todos = useSelector((state) => state.todoList.todos);

  const { pathname } = useLocation();

  const addTodo = useCallback((inputValue) => {
    dispatch(addTodoActions(inputValue));
  }, [dispatch]);

  const toggleCompletion = useCallback((todoId) => {
    dispatch(changeTodoCompletionStatus(todoId));
  }, [dispatch])

  const deleteTodo = useCallback((todoId) => {
    dispatch(deleteTodoActions(todoId));
  }, [dispatch])

  const setCurrentPage = useCallback(( nextPage ) => {
    dispatch(changeCurrentPage(nextPage));
  }, [dispatch])

  const filteredTodos = todos.filter((todo) => {
    if (pathname.includes("active")) {
      return todo.isCompleted === false;
    }

    if (pathname.includes("done")) {
      return todo.isCompleted === true;
    }

    return true;
  });

  const isNoTodos = filteredTodos.length === 0;

  const emptyText = useMemo(() => {
    if (pathname.includes("all") || pathname.includes("active")) {
      return "Keep calm. There are no todos for today";
    }
    return "You haven't done anything yet ";
  }, [pathname]);

  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage} />
      <Form onSubmit={addTodo} />
      {
        isNoTodos ? (
          <span>{emptyText}</span>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              onChangeCompletionStatus={toggleCompletion}
              onDelete={deleteTodo}
              page={currentPage}
              title={todo.title}
              id={todo.id}
              isCompleted={todo.isCompleted}
            />
          ))
        )
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