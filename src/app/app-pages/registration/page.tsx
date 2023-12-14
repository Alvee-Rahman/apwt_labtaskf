
"use client"
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [error, setError] = useState('');

  const handleRegistration = async (e:FormEvent) => {
    e.preventDefault();
    
    const registrationApiUrl = 'api/register';

    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(registrationApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          userName,
          email,
          password,
          confirmPassword,
          address,
          companyName,
          phoneNumber,
          city,
          country,
        }),
      });

      if (response.ok) {
        // Successful registration logic, e.g., redirect to success page
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
        console.error('An error occurred during registration', error);
      setError('An unexpected error occurred');
    }
  };

  const validateForm = () => {

    if (!fullName || !email || !userName || !password || !confirmPassword || !phoneNumber) {
      setError('All required fields must be filled out');
      return false;
    }

    if (fullName.length < 3 || fullName.length > 30 || !/^[a-zA-Z\s]+$/.test(fullName)) {
      setError('Full name must be between 3 and 30 characters and alphabetic');
      return false;
    }

    if (password.length < 8 || password.length > 20 || !/^[a-zA-Z0-9]+$/.test(password)) {
      setError('Password must be between 8 and 20 characters and alphanumeric');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match');
      return false;
    }

    // Additional validations...

    return true;
  };

  return (
    <div>
      <h1>Registration Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegistration}>
       {error && <p style={{ color: 'red' }}>{error}</p>}
  <div>
    <label>Full Name:</label>
    <input
      type="text"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      required
    />
  </div>
  <div>
    <label>User Name:</label>
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      required
    />
  </div>
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
    <label>Confirm Password:</label>
    <input
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
  </div>
  <div>
    <label>Address:</label>
    <input
      type="text"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
    />
  </div>
  <div>
    <label>Company Name:</label>
    <input
      type="text"
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
    />
  </div>
  <div>
    <label>Phone Number:</label>
    <input
      type="tel"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      pattern="[0-9]{11,15}"
      required
    />
  </div>
  <div>
    <label>City:</label>
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  </div>
  <div>
    <label>Country:</label>
    <input
      type="text"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
  </div>
  <div>
    <button type="submit">Sign Up</button>
  </div>
</form>
</div>
)
};

export default RegisterPage;
