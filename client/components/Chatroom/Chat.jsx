import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';
import Message from './Message';
import MessageBox from './MessageBox';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const addMessage = (msg) => {
    console.log(msg); // Log the received message
    setMessages((oldMessages) => [
      ...oldMessages,
      ...(Array.isArray(msg) ? msg.reverse() : [msg]),
    ]);
  };

  const sendMessage = (messageContent) => {
    if (socket) {
      const message = {
        content: messageContent,
        date: new Date(), // add current date when sending a message
      };
      socket.emit('message', message);
    }
  };

  const deleteMessage = (index) => {
    setMessages((oldMessages) => {
      const updatedMessages = [...oldMessages];
      updatedMessages.splice(index, 1);
      return updatedMessages;
    });
  };

  useEffect(() => {
    const newSocket = socketIoClient('http://localhost:3000', {
      autoConnect: false,
    });

    const handleNewMessage = (newMessage) => {
      addMessage(newMessage);
    };

    newSocket.on('latest', handleNewMessage);
    newSocket.on('message', handleNewMessage);
    newSocket.connect();

    setSocket(newSocket);

    return () => {
      newSocket.off('latest', handleNewMessage);
      newSocket.off('message', handleNewMessage);
      newSocket.disconnect();
    };
  }, []);

  return (
    <div>
      <div id='msgBox'>
        {messages.map((msg, index) => (
          <div key={index}>
            <Message msg={msg} />
            <button onClick={() => deleteMessage(index)}>Delete Post</button>
          </div>
        ))}
      </div>
      <MessageBox sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
