// // 📁 FRONTEND: pages/VerifyOtp.jsx
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState("");

//   const navigate = useNavigate();
//   const email = localStorage.getItem('emailOTP');
//   const userToken = localStorage.getItem("userToken");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify-otp`, {
//         method: "POST",
//         headers: { 
//             "Content-Type": "application/json",
//             authorization: `Bearer ${userToken}`,
//             role : 'user'
//          },
//         body: JSON.stringify({ email, otp }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         toast.success(data.message);
//         alert(data.message);
//         navigate("/reset-password");
//       } else{
//         toast.error(data.message)
//         alert(data.message)
//       } ;
//     } catch (err) {
//       toast.error("Server error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
//       <button type="submit">Verify OTP</button>
//     </form>
//   );
// };

// export default VerifyOtp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLock, FiArrowRight } from "react-icons/fi";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem('emailOTP');
  const userToken = localStorage.getItem("userToken");

  const validateForm = () => {
    const newErrors = {};
    if (!otp) {
      newErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(otp)) {
      newErrors.otp = "OTP must be 6 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            authorization: `Bearer ${userToken}`,
            role: 'user'
         },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        navigate("/reset-password");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify OTP
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We've sent a 6-digit code to {email}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP Code
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength="6"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className={`block w-full pl-10 pr-3 py-2 border ${errors.otp ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="123456"
                />
              </div>
              {errors.otp && (
                <p className="mt-2 text-sm text-red-600">{errors.otp}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  'Verifying...'
                ) : (
                  <>
                    Verify OTP <FiArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
