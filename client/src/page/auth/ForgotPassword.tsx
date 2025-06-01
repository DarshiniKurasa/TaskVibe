import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/auth/forgot-password", { email, password });
      setMessage(response.data.message);
    } catch {
      setMessage("Error updating password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-md p-6 rounded-lg shadow-lg bg-white text-black transition transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg bg-black text-white focus:ring-2 focus:ring-gray-600 transition-all"
          />
          <input 
            type="password" 
            placeholder="New Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg bg-black text-white focus:ring-2 focus:ring-gray-600 transition-all"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg bg-black text-white focus:ring-2 focus:ring-gray-600 transition-all"
          />
          <button 
            type="submit" 
            className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Update Password
          </button>
        </form>
        {message && <p className="text-center mt-4 text-gray-400">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
