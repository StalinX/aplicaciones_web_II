import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App.js';


const rootElement =   document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement)
root.render(
    <App />,

);
