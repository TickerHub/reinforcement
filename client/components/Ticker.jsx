import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function Ticker(props) {
  const { tickerData } = props;
  useEffect(() => {
    console.log(tickerData);
  }, []);

  // const timeSeries = tickerData['Time Series (Daily)'].map((day) => {

  // })

  return (
    <>
      <div class='bg-white py-24 sm:py-32'>
        <Marquee>{JSON.stringify(tickerData['Time Series (Daily)'])}</Marquee>
        <div class='mx-auto max-w-7xl px-6 lg:px-8'>
          <div class='mx-auto max-w-2xl lg:text-center'>
            <h2 class='text-base font-semibold leading-7 text-indigo-600'>
              Stock
            </h2>
            <p class='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              {tickerData['Meta Data']['2. Symbol']}
            </p>
            <p class='mt-6 text-lg leading-8 text-gray-600'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
