import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TaskListProvider } from './contexts/TaskListContext.tsx';
import { TasksProvider } from './contexts/TaskContext.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import { ColumnProvider } from './contexts/ColumnContext.tsx';
import { AppProvider } from './contexts/AppContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
