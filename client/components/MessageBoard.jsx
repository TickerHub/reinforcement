import React from 'react';
const date = new Date();
export default function MessageBoard() {
  return (
    <div
      id='messages'
      className='bg-white-100  p-4 md:px-0 flex flex-col items-center'
    >
      <div className='text-slate-50 border-green-500 card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-base-200 mx-auto max-w-md p-4 rounded-lg'>
        <div className='container bg-info p-6 rounded-lg '>
          <p className='message__body '>HERE IS WHERE THE MESSAGE WILL GO</p>
          <p className='message__date'>{date.toLocaleString()}</p>
        </div>
      </div>
    
    </div>
  );
}
