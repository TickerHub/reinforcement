import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase.js';
import Logo from '../../images/TickerHub-white (1).png';

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
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-30 w-auto' src={Logo} alt='Your Company' />
          <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Sign in with your Google account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div className='flex justify-center'>
              <button class='px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-slate-300 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'>
                <img
                  class='w-6 h-6'
                  src='https://www.svgrepo.com/show/475656/google-color.svg'
                  loading='lazy'
                  alt='google logo'
                />
                <span>Login with Google</span>
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            In collaboration with{' '}
            <a
              href='https://www.alphavantage.co/documentation/'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Alpha Vantage API
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
