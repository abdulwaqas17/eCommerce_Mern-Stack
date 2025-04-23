import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const EmployeeRegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
    address: "",
    department: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();
      console.log(data);
      alert(data.message);

      if (data.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-md">
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
          <h2 className="text-2xl font-bold text-gray-800">Create Employee Account</h2>
          <p className="text-gray-500 text-sm mt-1">
            Register as an employee to manage your tasks
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.fullname}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.number}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={formData.address}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Department dropdown */}
          <select
            name="department"
            onChange={handleChange}
            value={formData.department}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            <option value="Inventory">Inventory</option>
            <option value="Orders">Orders</option>
            <option value="Support">Support</option>
            <option value="Logistics">Logistics</option>
            <option value="Accounts">Accounts</option>
          </select>

          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-200"
          >
            Register
          </button>
        </form>

        <footer className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Already have an account? Login here
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default EmployeeRegistrationForm;
