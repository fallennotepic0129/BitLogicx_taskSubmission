import { useState } from 'react';

export default function Login() {
  // 1. State to hold form inputs and server messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // 2. The function that runs when the form is submitted
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setMessage('Logging in...');
    setIsError(false);

    try {
      // Send a POST request to your Node server
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // SUCCESS: Save the JWT token to local storage
        localStorage.setItem('token', data.token);
        setMessage('Login successful! Welcome back.');
        setIsError(false);
        
        // Next step: Redirect to dashboard here!
      } else {
        // FAILED: Show the error message from the backend
        setMessage(data.message);
        setIsError(true);
      }
    } catch (error) {
      setMessage('Cannot connect to the server. Is Node running?');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FE] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-[#FF8A00] tracking-tight mb-2">Logo</h1>
          <h2 className="text-xl font-bold text-gray-800">Sign in to your account</h2>
        </div>

        {/* Status Message */}
        {message && (
          <div className={`p-3 mb-4 rounded-md text-sm font-semibold ${isError ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
            {message}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0B3954] text-white font-bold py-3 rounded-md hover:bg-[#124D70] transition-colors"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}