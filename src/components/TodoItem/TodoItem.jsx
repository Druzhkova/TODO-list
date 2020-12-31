import React, { useCallback } from "react";
import styled from "styled-components";
import imgDelete from "../../assets/delete.png"

export function TodoItem({ title, id, onChangeCompletionStatus, onDelete, isCompleted}) {
  
  const onCompletionButtonClick = useCallback(() => {
    onChangeCompletionStatus(id);
  }, [id, onChangeCompletionStatus]);

  const onDeleteClick = useCallback(() => {
    onDelete(id)
  }, [id, onDelete])

  return (
    <Container>
      <Inner isCompleted={isCompleted}>
        <SpanCheckBox onClick={onCompletionButtonClick} isCompleted={isCompleted}></SpanCheckBox>
          {title}
      </Inner>
      <Delete onClick={onDeleteClick}><img src={imgDelete} alt=""/></Delete>
    </Container>
  );
}

const Delete = styled.span`
  cursor: pointer;
  padding: 5px 10px;
`;

const Container = styled.li`
  user-select: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Inner = styled.div`
  color: #6c717b;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 5px 5px 30px;
  ${(props) => props.isCompleted ? `
    color: #aeb7c6;
    text-decoration: line-through;
  ` : ''}
`;

const SpanCheckBox = styled.span`
  left: 4px;
  top: 50%;
  position: absolute;
  transform: translatey(-50%);
  width: 18px;
  height: 18px;
  display: block;
  background: white;
  border-radius: 3px;
  border: 1px solid #b8bfcc;
  box-shadow: 0 2px 3px #f0f4f8;

  ${(props) => props.isCompleted ? `
    &::after {
      content: '';
      position: absolute;
      top: 4px;
      right: -4px;
      width: 18px;
      height: 2px;
      background: #6c717b;
      border-radius: 10%;
      transform: rotate(-45deg);
    }

    &::before {
      content: '';
      position: absolute;
      top: 7px;
      right: 9px;
      width: 7px;
      height: 2px;
      background: #6c717b;
      border-radius: 10%;
      transform: rotate(42deg);
    }
  ` : ''} 


`;