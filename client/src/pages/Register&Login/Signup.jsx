import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialFormState = {
  fullname: "",
  email: "",
  password: "",
  number: "",
  address: "",
  dob: "",
  country: "",
  city: "",
  profileImage: null,
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "profileImage" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const { email, password, number } = formData;

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    if (!/^[0-9]{10,15}$/.test(number)) {
      toast.error("Phone number must be 10 to 15 digits");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => payload.append(key, val));

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Something went wrong");
        return;
      }

      toast.success(data.message);
      if (res.ok) {
        setFormData(initialFormState);
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
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
          <h2 className="text-2xl font-bold text-gray-800">
            Create an Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Register to start shopping with us
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="fullname"
            placeholder="Full Name"
            required
            value={formData.fullname}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="number"
            placeholder="Phone Number"
            type="tel"
            required
            value={formData.number}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="dob"
            type="date"
            required
            value={formData.dob}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="country"
            placeholder="Country"
            required
            value={formData.country}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />
          <input
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleChange}
            className="col-span-1 p-3 border rounded-md"
          />

          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="col-span-2 p-3 border rounded-md"
          />

          {formData.profileImage && (
            <div className="col-span-2 flex justify-center">
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`col-span-2 w-full bg-blue-600 text-white font-medium py-3 rounded-md transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Please wait..." : "Sign Up"}
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

export default RegistrationForm;
