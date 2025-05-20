import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Login Successful");
        localStorage.setItem("adminToken", data.token);
        navigate("/admindashboard");
      } else {
        toast.error(data.message || "Login Failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0883/8522/5074/files/logo_200x60@2x.png?v=1732847887.webp"
            alt="Logo"
            className="h-12 object-contain"
          />
        </div>

        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-sm text-gray-500">Sign in to manage the store</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="admin@example.com"
            onChange={handleChange}
            value={credentials.email}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            value={credentials.password}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium py-3 rounded-md transition duration-200`}
          >
            {loading ? "Logging in..." : "Login as Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
