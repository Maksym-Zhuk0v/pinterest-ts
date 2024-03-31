import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainContext } from './context';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContext>
  </React.StrictMode>
);