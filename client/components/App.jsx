import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import NavBar from './Navbar.jsx';
import Ticker from './Ticker.jsx';

const App = () => {
  const [tickerData, setTickerData] = useState({});
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Ticker' element={<Ticker tickerData={tickerData} />} />
          <Route path='/Home' element={<Home setTickerData={setTickerData} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
