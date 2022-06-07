import './App.scss';
import { useEffect } from 'react';
//Routes
import { Route, Routes, Navigate, useNavigate  } from 'react-router-dom';

//pages
import Login from './pages/Login';
import Home from './pages/Home';
import Clients from './pages/clients/Clients';
import Client from './pages/clients/Client';
import Services from './pages/Services';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
//components
import AuthRoute from './components/AuthRoute';
import AuthComponent from './components/AuthComponent';
import Navbar from './components/Navbar';
 

//Context
import { useAuth }  from './context/Auth.Context';

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
        <Route path='/inicio' element={<AuthRoute><Home/></AuthRoute>} />
        <Route path='/clientes' element={<AuthRoute><Clients/></AuthRoute>} />
        <Route path='/cliente/:id' element={<AuthRoute><Client/></AuthRoute>} />
        <Route path='/servicios' element={<AuthRoute><Services/></AuthRoute>} />
        <Route path='/perfil' element={<AuthRoute><Profile/></AuthRoute>} />
        <Route path='/404' element={<PageNotFound/>} />
        <Route path='*' element={<Navigate to='/404'/>} />
      </Routes>

    </div>
  );
}

export default App;
