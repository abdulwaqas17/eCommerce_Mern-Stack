import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch('http://localhost:3000/auth/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            let data = await res.json();

            console.log(data);

            alert(data.message);
            


            if (data.status == 200) {

                window.localStorage.setItem('userToken', data.token);
                
                setFormData({

                    email: "",
                    password: "",

                });

                navigate('/');
            
            }




        } catch (error) {
            console.log(error.response.data.message);
            alert(error.response.data.message);
        }
    }
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
          <div className=" mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Log in</h2>
            <p className="text-gray-500 text-sm mt-1">
              Enter your email and password to continue
            </p>
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={handleChange}
                value={formData.password}
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-200"
            >
              Continue
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
