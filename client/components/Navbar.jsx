import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../../images/TickerHub-white.png';

const navigation = [
  { name: 'Home', current: false },
  { name: 'Login', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                  <div className='flex items-center'>
                    <img
                      className='h-40 w-auto'
                      src={Logo}
                      alt='Your Company'
                    />
                  </div>
                  <div className='ml sm:ml-6 '></div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <button
                    type='button'
                    className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>View notifications</span>
                    {/* <BellIcon className='h-6 w-6' aria-hidden='true' /> */}
                  </button>
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className=''>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={`/${item.name}`}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </>
  );
}
