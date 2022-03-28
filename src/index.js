import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/Table.css'
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import getDataReducer from './redux/reducer/getData-reducer';

const rootReducer = combineReducers({
  getDataReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <div className='main'>
        <App />
      </div>,
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);