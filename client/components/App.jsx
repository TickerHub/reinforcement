import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
