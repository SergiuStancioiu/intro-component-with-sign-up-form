import { useState } from 'react';

function App() {
  return (
    <>
      <div className='px-7 max-w-[460px] mx-auto'>
        <div>
          <h1 className='font-bold text-center text-white mt-[100px] text-3xl  mb-7'>
            Learn to code by watching others
          </h1>
          <p className='font-poppins text-center text-white mb-[70px] text-lg'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className='p-5 bg-custom-purple rounded-lg mb-6 border-b-8 border-custom-orange'>
          <p className='px-6 text-white text-center'>
            Try it free 7 days
            <span className='font-light text-gray-300 pl-1'>
              then $20/mo. thereafter
            </span>
          </p>
        </div>
        <form className='p-6 bg-white rounded-lg flex flex-col gap-5'>
          {/* First Name */}
          <div>
            <input
              type='text'
              placeholder='First Name'
              name='First Name'
              id='first-name'
              className='py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer'
            />
            {/* <p>First Name cannot be empty</p> */}
          </div>
          {/* Last Name */}
          <div>
            <input
              type='text'
              placeholder='Last Name'
              name='Last Name'
              id='last-name'
              className='py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer'
            />
            {/* <p>Last Name cannot be empty</p> */}
          </div>
          {/* Email */}
          <div>
            <input
              type='email'
              placeholder='Email'
              name='Email'
              id='email'
              className='py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer'
            />
            {/* <p>Email cannot be empty</p> */}
          </div>
          {/* Password */}
          <div>
            <input
              type='password'
              placeholder='Password'
              name='Password'
              id='Password'
              className='py-3 w-full appearance-none outline-none px-4 border transform duration-300 border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 focus:ring-0 cursor-pointer'
            />
            {/* <p>Password cannot be empty</p> */}
          </div>
          <button
            className='bg-green-500 py-4 rounded-md font-medium text-white uppercase transform duration-300 hover:bg-green-600 cursor-pointer'
            type='submit'
          >
            Claim your free trial
          </button>
          <p className='text-center text-xs text-gray-400 '>
            By clicking the button, you are agreeing to our
            <a className='pl-1 text-custom-red font-bold' href='#'>
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
