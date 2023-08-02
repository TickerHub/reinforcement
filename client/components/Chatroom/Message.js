import React from 'react';

// Component receives a single `msg` prop which contains the message content and the submitted date.
// Component renders a single message in the chat with a formatted date.

const Message = ({ msg }) => {
  return (
    <div className='msg'>
      <span> {new Date(msg.date).toLocaleDateString()} </span>
      <span> {msg.content} </span>
    </div>
  );
};

export default Message;
