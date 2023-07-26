import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function Chatboard({ handleOpen ,handleDrawerToggle}) {

  return (
    // <section className="flex justify-center items-center flex-col flex-auto border-l border-gray-800">
    //   <img src="/assets/images/7495.png" className='w-full h-5/6 md:w-3/4 md:h-3/4 '/>
    //   <button onClick={handleOpen} className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-700 text-white bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-700 transition-all">
    //       Let's chat
    //   </button>
    //   <p className='font-semibold mt-2'> with family, friends, and colleagues.</p>
    // </section>
    <section className="flex flex-col flex-auto border-l border-gray-800">
      {/* ============== Header ============== */}
      <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
        <div className="flex">
          <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className='visible md:invisible'
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <img
              className="shadow-md rounded-full w-full h-full object-cover ml-5 md:ml-0"
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
          </div>
          <div className="text-sm ml-12 md:ml-8">
            <p className="font-bold">Scarlett Johansson</p>
            <p>Active 1h ago</p>
          </div>
        </div>
      </div>
      {/* ============== Chat-area ============== */}
      <div className="chat-body p-4 flex-1 overflow-y-scroll">
        <div className="flex flex-row justify-start">
          <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
          </div>
          <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
            <div className="flex items-center group">
              <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                Hey! How are you?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center group">
              <p className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                Shall we go for Hiking this weekend?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center group">
              <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Volutpat lacus laoreet non curabitur gravida.
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
        <div className="flex flex-row justify-end">
          <div className="messages text-sm text-white grid grid-flow-row gap-2">
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                Hey! How are you?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                Shall we go for Hiking this weekend?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Volutpat lacus laoreet non curabitur gravida.
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
        <div className="flex flex-row justify-start">
          <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
          </div>
          <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
            <div className="flex items-center group">
              <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                Hey! How are you?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center group">
              <p className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                Shall we go for Hiking this weekend?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center group">
              <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Volutpat lacus laoreet non curabitur gravida.
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
        <div className="flex flex-row justify-end">
          <div className="messages text-sm text-white grid grid-flow-row gap-2">
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                Hey! How are you?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                Shall we go for Hiking this weekend?
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-row-reverse group">
              <a
                className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                href="#"
              >
                <img
                  className="absolute shadow-md w-full h-full rounded-l-lg object-cover"
                  src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640"
                  alt="hiking"
                />
              </a>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Volutpat lacus laoreet non curabitur gravida.
              </p>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path
                    d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ============== Footer ============== */}
      <div className="chat-footer flex-none">
        <div className="flex flex-row items-center p-4">
          <button
            type="button"
            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
            </svg>
          </button>

          <button
            type="button"
            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
            </svg>
          </button>

          <div className="relative flex-grow">
            <label>
              <input
                className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                type="text"
                defaultValue=""
                placeholder="Type Messeage....."
              />
              <button
                type="button"
                className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-full h-full fill-current"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                </svg>
              </button>
            </label>
          </div>

          <button
            type="button"
            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"></path> </g></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Chatboard