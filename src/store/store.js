import { createStore, applyMiddleware } from "redux";
import { rootReduser } from "./rootReducer";
import { weatherMiddleware } from "../components/Weather";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReduser,
  composeWithDevTools(
    applyMiddleware(weatherMiddleware)
  )
);