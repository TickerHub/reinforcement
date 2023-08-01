import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div data-theme='night'>
      <>
        <nav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/home'>Home</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  );
};

export default NavBar;