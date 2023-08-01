import React from 'react';
const date = new Date();
export default function MessageBoard() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <div className='container mx-auto'></div>
        <p className='message__body p-10'>HERE IS WHRE THE MESSAGE WILL GO</p>
        <p className='message__date p-10'>date</p>
      </div>
    </div>
  );
}
