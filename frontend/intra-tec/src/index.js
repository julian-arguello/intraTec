import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'semantic-ui-css/semantic.min.css';


//Router
import { BrowserRouter } from 'react-router-dom';
//Auth
import { AuthProvider } from './context/Auth.Context';
//Nofity
import { NotifyProvider } from './context/Notify.Context';
//Service
import { ServiceProvider } from './context/Service.Context';
//Client
import { ClientProvider } from './context/Client.Context';

console.log("index")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

    <BrowserRouter>
      <AuthProvider>
        <NotifyProvider>
          <ClientProvider>
            <ServiceProvider>
              <App />
            </ServiceProvider>
          </ClientProvider>
        </NotifyProvider>
      </AuthProvider>
    </BrowserRouter>

);