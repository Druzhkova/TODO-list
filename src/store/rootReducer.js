import { combineReducers } from 'redux';
import { todoListReducer } from '../TodoList';
import { weatherReducer } from '../components/Weather';

export const rootReduser = combineReducers({ todoList: todoListReducer, weather: weatherReducer });
