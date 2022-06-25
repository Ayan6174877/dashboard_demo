import React, { useEffect} from 'react'
import { LoginForm } from '../../components/loginform/LoginForm'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './login.css';

export const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  let navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard")
    }
   return () => {}
 }, [isLoggedIn, navigate])

  return (
    <div className='bg__darkcyan'>
      <div className='container'>
        <section>
          <div className='flex__items flex__vertical__center'>   
             <div className='card'>
                    <div className='card__heading'>
                        <h1>
                            Login
                        </h1>
                    </div>
                    <LoginForm />
                </div>
           </div>
        </section>
        </div>
    </div>
  )
}
