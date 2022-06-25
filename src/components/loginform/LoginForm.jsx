import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { authActions } from "../../context/authSlice";
import { emailValidation, passwordValidation } from '../../utilities/formvalidation';
import { useNavigate } from "react-router-dom";
import './forms.css' ;

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();

    // checking basic validation for disabling the button
    // checking email is not empty
    // checking password length is not less than 4
    const disabledBtn = email.length < 1 || password.length < 4 ;

    const dispatch = useDispatch();
    let emailRef = useRef();
    let passwordRef = useRef();
    
    // submitting the form after validation
    // usually its an API call but here we are calling the reducer functions to update the user login state
    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch the actions
        let isEmailValid = emailValidation(email); // checking if email is valid like example@domain.com
        let isPasswordValid = passwordValidation(password); // password validation
        if(isEmailValid && isPasswordValid){
            dispatch(authActions.login()) // dispatching actions
            navigate("/dashboard"); // navigate to the dashboard page
        }
        else{
            setErrorMessage('You have entered a wrong username or password. Make sure to enter a password between 7 to 15 characters which contain at least one numeric digit and a special character')
        }
    }

    useEffect(() => {
       emailRef.current.focus(); // focus on email input when the page renders first time
    }, [])

  return (
    <div role="form" className='form'>
         <form onSubmit={handleSubmit}>
            <div className='form__controls'>
               <label htmlFor="email">Email</label>
               <input ref={emailRef} type="text" id="email" aria-required="true" value={email}
                onChange={(e) => setEmail(e.target.value)}
               placeholder='email (example - example@domain.com)' />
            </div>
            <div className='form__controls'>
                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" id="password" aria-required="true" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            </div>
            {/* this message will show when login fails  */}
            <div className={`form__error_message ${!errorMessage ? 'error__message__hide' : '' }`}>
                {errorMessage}
            </div>
            <button disabled={disabledBtn} className={`login__btn ${disabledBtn ? 'not-active-btn' : ''}`} type="submit">
              Login
            </button>
      </form>
    </div>
  )
}
