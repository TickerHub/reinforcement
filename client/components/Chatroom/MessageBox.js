import React, { useState } from 'react';

// Component for the input field where users can type and send messages.
// Component receives a sendMessage prop that is utilized to send the message received to the server.
// The useState hook is triggered when the form is submitted.

const MessageBox = ({ sendMessage }) => {
  const [value, setValue] = useState('');

  const postMessage = (e) => {
    e.preventDefault();
    if (!value) return;
    sendMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={postMessage}>
      <input
        type='text'
        className='input'
        placeholder='message'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Add Post</button>
    </form>
  );
};

export default MessageBox;
