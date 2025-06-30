'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const page = () => {
   const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
   const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: Email, password: Password }) 
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('quickfix_token', data.token);
      router.push('/dashboard');
    } else {
      alert(data.message || 'Something went wrong');
    }
  };

  return (
    <div className='bg-purple-100 mx-auto max-w-md mt-20 p-6 rounded-lg shadow'>
      <form onSubmit={handleLogin} className='space-y-4'>
        <h1 className='text-2xl font-bold text-purple-900 text-center'>LOGIN</h1>

        <input
          type='email'
          className='p-2 w-full text-black border rounded'
          placeholder='Email'
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          className='p-2 w-full text-black border rounded'
          placeholder='Password'
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type='submit'
          className='bg-purple-500 w-full text-white px-4 py-2 rounded'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default page

