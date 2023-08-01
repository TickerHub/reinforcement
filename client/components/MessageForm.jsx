import React from 'react';

export default function MessageForm() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <form className='space-y-6'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <textarea
            placeholder='Message'
            class='textarea textarea-bordered textarea-md w-full max-w-xs bg-white-200'
          ></textarea>
          <div className='flex justify-start pt-5'>
            <button
              type='submit'
              class='px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-blue-500 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
