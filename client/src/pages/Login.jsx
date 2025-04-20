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


            if (data.status == 200) {

                window.localStorage.setItem('token', data.token)

                setFormData({

                    email: "",
                    password: "",

                });
            }

            if (data.role == 'admin') {

                navigate('/admindashboard');

            } else if (data.role == 'employee') {

                navigate('/employeedashboard');

            } else {
                navigate('/');
            }



        } catch (error) {
            console.log(error.response.data.message);
            alert(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                {/* Already have an account */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <Link
                        to="/signup"
                        className="text-blue-500 hover:underline ml-1"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
