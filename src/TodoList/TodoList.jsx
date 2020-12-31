import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Header, Form, TodoItem } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addTodoActions, changeTodoCompletionStatus, deleteTodoActions, changeCurrentPage } from "./actions";
import { useLocation } from "react-router-dom"


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
      <Content>
        <Form onClick={addTodo} />
        {
          isNoTodos ? (
            <EmptyText>{emptyText}</EmptyText>
          ) : (
            <Inner>
              {
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
              }
            </Inner>
          )
        }
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 560px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 7px 30px rgba(62, 9, 11, .3);
`
const EmptyText = styled.div`
  color: #8e979c;
  font-size: 16px;
`
const Content = styled.div`
  text-align: center;
  padding: 10px 20px;
`
const Inner = styled.ul`
  margin-left: 0;
  padding: 0;
  letter-spacing: none;
  height: 220px;
  overflow: auto;
`