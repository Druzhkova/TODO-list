export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO_COMPLETION_STATUS = 'CHANGE_TODO_COMPLETION_STATUS';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export function addTodoActions(text) {
  return {
    type: ADD_TODO,
    payload: text,
  };
}

export function deleteTodoActions(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function changeTodoCompletionStatus(todoId) {
  return {
    type: CHANGE_TODO_COMPLETION_STATUS,
    payload: todoId,
  };
}

export function changeCurrentPage(nextPage) {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: nextPage,
  };
}