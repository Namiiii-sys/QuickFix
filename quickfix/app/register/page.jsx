'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const page = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [role, setRole] = useState('');
   const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role })
    });

    const data = await res.json();

    if (res.ok) {
      alert("registered successfully")
      router.push('/login');
    } else {
      alert(data.message || 'Something went wrong');
    }
  };

  return (
    <div className='bg-purple-100 mx-auto max-w-md mt-20 p-6 rounded-lg shadow'>
      <form onSubmit={handleRegister} className='space-y-4'>
        <h1 className='text-2xl font-bold text-purple-900 text-center'>REGISTER</h1>

        <input
          type='text'
          className='p-2 w-full text-black border rounded'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type='email'
          className='p-2 w-full text-black border rounded'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          className='p-2 w-full text-black border rounded'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />


         <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border px-3 py-2 rounded text-black"
      >
        <option value="USER">User</option>
        <option value="PROVIDER">Provider</option>
      </select>

        <button
          type='submit'
          className='bg-purple-500 w-full text-white px-4 py-2 rounded'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default page

