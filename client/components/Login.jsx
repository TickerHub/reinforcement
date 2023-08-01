import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase.js';
export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithGoogle().then(async (data) => {
        console.log(data);
        navigate('/home');
    });
  };
  return (
    <div className='login-wrapper'>
      <h1>Welcome! Please Log In!</h1>
      <button onClick={handleSubmit} variant='primary'>
        Google Log In
      </button>
      {''}
      <div>Login</div>
    </div>
  );
}
