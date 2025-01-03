import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='h-screen pt-8 bg-cover bg-center w-full bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] flex justify-between flex-col'>
        <img
          className='w-16 ml-8'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber Logo'
        />
        <div className='bg-white py-4 px-4 pb-6'>
          <h2 className='text-3xl font-bold font-poppins'>Get Started with Uber</h2>
          <Link
            to='/login'
            className='flex items-center justify-center w-full bg-black text-white py-3 mt-6 rounded'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
