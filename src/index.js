import React from 'react';
import ReactDOM from 'react-dom/client'; // 올바른 임포트
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')); // 올바른 사용
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
