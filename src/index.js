import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Components/Counter';
import './index.css';
import store from './Components/CounterStore';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
