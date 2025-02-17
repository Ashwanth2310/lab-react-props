import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClass from "./AppClass";
import Data from "./components/DataComponent";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClass data={Data}/>
  </React.StrictMode>
);