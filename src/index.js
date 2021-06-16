import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "./assets/scss/index.scss";
import App from "./App";
import { loadStations } from "./actions";

import reportWebVitals from "./reportWebVitals";
import radioStation from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(radioStation, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch(loadStations());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
