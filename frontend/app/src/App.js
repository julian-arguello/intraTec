//import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
//Nav
import Nav from './components/Nav';

//Pages

import Login from './pages/Login';
import Register from './pages/UserRegister';
import Clients from './pages/Clients';
import Client from './pages/Client';
import ClientCreate from './pages/ClientCreate';
import ClientEdit from './pages/ClientEdit';
import ServiceCreate from './pages/ServiceCreate';
import Page404 from './pages/Page404';
import {useAuth} from './context/Auth.Context'

//import Login from './components/Login'

function App(props) {

  //const [isAuth, setAuth] = useState(false)

  const { user } = useAuth();

  function AutUser({ children }) {
    return user ? children : <Navigate to="/" />
  }
  
  return (
    <div className="App">

    <Nav/>

    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/registro" element={<Register/>}/>
      
        <Route path="/clientes" element={<AutUser> <Clients/> </AutUser>}/>
        <Route path="/cliente/:id" element={<AutUser> <Client/></AutUser>}/>
        <Route path="/cliente/crear-nuevo" element={<AutUser><ClientCreate/></AutUser>}/>
        <Route path="/cliente/editar/:id" element={<AutUser><ClientEdit/></AutUser>}/>
        <Route path="/servicio/crear/:id" element={<AutUser><ServiceCreate/></AutUser>}/>

      

      <Route path="*" element={<Navigate to="/404" />}/>
      <Route path="/404" element={<Page404/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
