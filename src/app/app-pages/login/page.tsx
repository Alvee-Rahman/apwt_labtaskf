"use client"
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e :FormEvent) => {
    e.preventDefault();

    // Replace the following URL with your actual login API endpoint
    const loginApiUrl = '/api/login';

    // Perform frontend validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successful login logic, e.g., set authentication token, redirect to dashboard
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
