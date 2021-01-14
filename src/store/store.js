import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReduser } from './rootReducer';
import { weatherMiddleware } from '../components/Weather';

export const store = createStore(
  rootReduser,
  composeWithDevTools(
    applyMiddleware(weatherMiddleware),
  ),
);
