import React, { useEffect } from 'react';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';
export default function Ticker(props) {
  const { tickerData } = props;
  useEffect(() => {
    console.log(tickerData);
  }, []);
  return (
    <>
      <MessageForm />
      <MessageBoard />
      {/* <div>{JSON.stringify(tickerData)}</div> */}
    </>
  );
}
