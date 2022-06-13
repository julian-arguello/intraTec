import './App.scss';
import { useEffect } from 'react';
//Routes
import { Route, Routes, Navigate, useNavigate  } from 'react-router-dom';

//pages
import Login from './pages/Login';
import Home from './pages/Home';
import Clients from './pages/clients/Clients';
import Client from './pages/clients/Client';
import Services from './pages/services/Services';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
//components
import AuthRoute from './components/AuthRoute';
import AuthComponent from './components/AuthComponent';
import Navbar from './components/Navbar';

//Context
import { useAuth }  from './context/Auth.Context';

import { Link } from 'react-router-dom';


function App() {

  //Autenticación--------------------------
  const auth = useAuth()
  let navigate = useNavigate();
  //consultamos si al montar el componente el estado de auth.isAuth.
  //esto se ejecuta cada ves que se modificque auth.state.
  useEffect(() => {
    if(auth.state.isAuth){
      navigate('/inicio')
    }else{
      navigate('/')
    }
  }, [auth.state])
  //Consultamos si tenemos datos en el localstorage para autenticar.
  //esto se ejecuta unicamente al montar el componente, una unica vez.
  useEffect(() => {
    if(localStorage.getItem('auth-token') && localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      auth.dispatch({type: 'LOGIN', payload: user})
    }
  }, [])

  //---------------------------------------

  return (
    <div className="App">
      
      <AuthComponent>
        <Navbar />
      </AuthComponent>

        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/inicio' element={
            <AuthRoute>
              <div id='main' className='main-margin-open'>
                <Link to='/inicio' className='logo'><h1>Intratec</h1></Link>
                <Home/>
              </div>
            </AuthRoute>
          }/>
          <Route path='/clientes' element={
            <AuthRoute>
              <div id='main' className='main-margin-open'>
                <Link to='/inicio' className='logo'><h1>Intratec</h1></Link>
                <Clients/>
              </div>
            </AuthRoute>
          }/>
          <Route path='/cliente/:id' element={
            <AuthRoute>
              <div id='main' className='main-margin-open'>
                <Link to='/inicio' className='logo'><h1>Intratec</h1></Link>
                <Client/>
              </div>
            </AuthRoute>
          }/>
          <Route path='/servicios' element={
            <AuthRoute>
              <div id='main' className='main-margin-open'>
                <Link to='/inicio' className='logo'><h1>Intratec</h1></Link>
                <Services/>
              </div>
            </AuthRoute>
          }/>
          <Route path='/perfil' element={
            <AuthRoute>
              <div id='main' className='main-margin-open'>
                <Link to='/inicio' className='logo'><h1>Intratec</h1></Link>
                <Profile />
              </div>
            </AuthRoute>
          }/>
          <Route path='/404' element={<PageNotFound/>} />
          <Route path='*' element={<Navigate to='/404'/>} />
        </Routes>

    </div>
  );
}

export default App;
