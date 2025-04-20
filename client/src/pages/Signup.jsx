import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    number: '',
    address: '',
    dob: '',
    country: '',
    role: 'user', // default value
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const formDataToSend = new FormData();
    formDataToSend.append('fullname',formData.fullname);
    formDataToSend.append('email',formData.email);
    formDataToSend.append('number',formData.number);
    formDataToSend.append('password',formData.password);
    formDataToSend.append('address',formData.address);
    formDataToSend.append('dob',formData.dob);
    formDataToSend.append('country',formData.country);
    formDataToSend.append('role',formData.role);
    formDataToSend.append('profileImage',formData.profileImage);

    try {

        
    let res = await fetch('http://localhost:3000/auth/signup', {
        method: "POST",
        body: formDataToSend
      });

    let data = await res.json();
    
    console.log(data);

    } catch (err) {
        console.log(err);
        
    }
    


  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-6">
        <img src="/logo.png" alt="Logo" className="h-16 w-16 rounded-full shadow-lg" />
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type='tel'
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            required
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Country Input */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Role Dropdown */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          <input
            type="file"
            name="profileImage"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="md:col-span-2 p-3 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Register
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-white text-sm opacity-80">
        &copy; 2025 E-Commerce. All rights reserved.
      </footer>
    </div>
  );
};

export default RegistrationForm;
