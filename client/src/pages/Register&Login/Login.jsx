import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // ✅ UX: Loading state

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);
      

      if (res.ok) {
        let isUser = localStorage.getItem("userToken");

        if (!isUser) {
          let userCarts = localStorage.getItem("Carts_guest") || [];
          let wishlist = localStorage.getItem("Wishlist_guest") || [];

          localStorage.setItem(`Carts_${data.user._id}`, userCarts);
          localStorage.setItem(`Wishlist_${data.user._id}`, wishlist);

          localStorage.removeItem("Carts_guest");
          localStorage.removeItem("Wishlist_guest");
        }

        localStorage.setItem("userToken", data.token);
        setUser(data.user);
        alert("Login successful!")
        toast.success(data.message || "Login successful!");

        setFormData({ email: "", password: "" });
        navigate("/");
      } else {
        
        toast.error(data.message || "Login failed!");
         alert(data.message || "Login failed!");
      }

    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
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
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Log in</h2>
          <p className="text-gray-500 text-sm mt-1">
            Enter your email and password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <Link to="/forgot-password">Forget password?</Link>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-200"
          >
            {loading ? "Logging in..." : "Continue"}
          </button>
        </form>

        <footer className="text-center mt-6">
          <Link
            to="/signup"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Don't have an account? Register here
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
