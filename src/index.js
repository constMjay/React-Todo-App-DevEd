import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import "./assets/css/index.css";
import "bootstrap/dist/js/bootstrap.bundle";


ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

