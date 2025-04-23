import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      console.log(data);
      alert(data.message);

      if (data.status === 200) {
        navigate("/employee-dashboard");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-center mb-6">
          <a href="https://ap-medilazar.myshopify.com">
            <img
              src="https://cdn.shopify.com/s/files/1/0883/8522/5074/files/logo_200x60@2x.png?v=1732847887.webp"
              alt="Ap Medilazar Logo"
              className="h-12 object-contain"
            />
          </a>
        </div>

        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Employee Login</h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={credentials.email}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>

        <footer className="text-center mt-6">
          <Link
            to="/register"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Don't have an account? Register here
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default EmployeeLogin;
