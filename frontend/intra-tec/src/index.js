import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//Router
import { BrowserRouter } from 'react-router-dom';
//Auth
import { AuthProvider } from './context/Auth.Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);