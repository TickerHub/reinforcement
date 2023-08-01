import React, { useEffect } from 'react'

export default function Ticker(props) {
  const { tickerData } = props;
  useEffect(() => { 
    console.log(tickerData);
  }, [])
  return (
    <div>{JSON.stringify(tickerData)}</div>

  )
}
