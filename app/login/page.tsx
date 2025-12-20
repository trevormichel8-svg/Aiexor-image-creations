'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    alert(`Logged in as ${email}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login to Aiexor</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-3 w-80 text-black rounded mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-500"
      >
        Login
      </button>
    </main>
  );
}
