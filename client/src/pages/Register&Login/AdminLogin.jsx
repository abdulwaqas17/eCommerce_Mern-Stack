import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
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
      const res = await fetch("http://localhost:3000/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      console.log(data);
      alert(data.message);

      if (data.status === 200) {
        window.localStorage.setItem('adminToken',data.token);
        navigate("/admindashboard");
      }
    } catch (err) {
      console.error(err);
      alert("Admin Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
          <a href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0883/8522/5074/files/logo_200x60@2x.png?v=1732847887.webp"
              alt="Logo"
              className="h-12 object-contain"
            />
          </a>
        </div>

        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-sm text-gray-500">Sign in to manage the store</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
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
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
