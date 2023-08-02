import React from 'react';

export default function MessageForm() {
  return (
    <div className='flex flex-1 flex-col justify-center px-6 py-6 lg:px-8'>
      <form className='space-y-6'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm text-slate-950'>
          <textarea
            placeholder='Message'
            class=' textarea-bordered bg-slate-200 textarea-md w-full max-w-xs rounded-md'
          ></textarea>
          <div className='flex justify-start pt-5'>
            <button
              type='submit'
              className=' px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-200 hover:border-slate-400 hover:text-sky-400 hover:shadow transition duration-150'
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
