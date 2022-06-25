import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';  
import {Route, Routes} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PageNotFound from './pages/PageNotFounj';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  let navigate = useNavigate();

  useEffect(() => {
     if(!isLoggedIn){
       navigate("/login")
     }
    return () => {}
  }, [isLoggedIn, navigate])
  
 
  return (
      <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
        <Route path='/login' exact element={<Login />} />
         <Route path='/dashboard' exact element={<Dashboard />} />
         <Route path='/*' element={<PageNotFound />} />
      </Routes>
      </>
    );
}

export default App;
