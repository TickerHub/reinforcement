import React, { useState } from 'react';
import Chat from './Chatroom/Chat';
export default function Home() {
  const [ticker, setTicker] = useState('');
  const onSubmit = async (e) => {
    console.log(ticker);
    const res = await fetch('http://localhost:3000/fetch-data', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        ticker: ticker,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  const onChange = (e) => {
    setTicker(e.target.value);
    console.log(ticker);
  };

  return (
    <>
      <div className='h-screen flex items-center justify-around'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Select Ticker
        </h1>
        <div className='form-control w-full max-w-xs'>
          <input
            onChange={onChange}
            type='text'
            placeholder='ex: TSLA'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='label'>
            <button className='label-text-alt' onClick={onSubmit}>
              Search
            </button>
          </label>
        </div>
      </div>
      <Chat />
    </>
  );
}
