import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

  let navigate = useNavigate();
  let { user, setUser } = useUser(null);
  let [orders, setOrders] = useState([]);
  let [statusCount, setStatusCount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log(user);

   // controlled form ke liye local state
   const [formData, setFormData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    number: user?.number || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "",
    dob: user?.dob || "",
  });


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = window.localStorage.getItem("userToken");
        const res = await fetch("http://localhost:3000/api/orders/my-orders", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            role: "user",
          },
        });

        let data = await res.json();

        console.log(data);

        if(data.message == 'invalid token') {
          alert(data.message);
          navigate('/login')
          
        }

        setOrders(data.orders);

        // count by status
        const counts = { pending: 0, shipping: 0, declined: 0 };
        data.orders.forEach((order) => {
          counts[order.status] = (counts[order.status] || 0) + 1;
        });
        setStatusCount(counts);
      } catch (err) {
        console.log("Error fetching orders", err);
      }
    };
    fetchOrders();
  }, []);


  // for user update
  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname,
        email: user.email,
        number: user.number,
        address: user.address,
        city: user.city,
        country: user.country,
        dob: user.dob,
      });
    }
  }, [user]);

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const { fullname, email, number, address, city, country, dob } = formData;

    if (
      !fullname ||
      !email ||
      !number ||
      !address ||
      !city ||
      !country ||
      !dob
    ) {
      return alert("Please fill all fields");
    }

    try {
      const res = await fetch("http://localhost:3000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("userToken")}`,
          role: "user",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Profile updated!");
        setUser(data.updatedUser);
        setShowModal(false);
      } else {
        alert(data.message || "Failed to update");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      {user ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 md:px-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-blue-800">
                    {user.fullname}
                  </h2>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-xl text-sm"
                    onClick={() => setShowModal(true)}
                  >
                    Edit Profile
                  </button>
                </div>
                <p className="text-sm text-gray-500">Role: {user.role}</p>
                <div className="mt-4 space-y-1 text-gray-700">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.number}
                  </p>
                  <p>
                    <strong>Address:</strong> {user.address}, {user.city},{" "}
                    {user.country}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {user.dob}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Your Orders
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orders?.map((order) => (
                  <div
                    key={order._id}
                    className="border rounded-xl p-4 flex items-center gap-4 bg-slate-50"
                  >
                    {/* <img
                      src={order.orderItems[0].productId.image1}
                      alt="product"
                      className="w-16 h-16 rounded-lg object-cover"
                    /> */}
                    <div>
                      <p className="font-semibold">Order #{order._id}</p>
                      <p className="font-semibold">No. of Items : {order.orderItems.length}</p>
                      <p className="text-sm text-gray-600">
                        Date:{" "}
                        {new Date(order.orderDate).toISOString().split("T")[0]}
                      </p>
                      <p className="text-sm text-gray-600">
                        Total: $ {order.totalAmount}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${
                          order.status === "pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : order.status === "shipping"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white p-4 rounded-xl shadow flex justify-between text-sm text-gray-600">
                <p>Total Orders: {orders?.length}</p>
                <p>Pending: {statusCount ? statusCount.pending : ""}</p>
                <p>Shipped: {statusCount ? statusCount.shipping : ""}</p>
                <p>Declined: {statusCount ? statusCount.declined : ""}</p>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl"
              >
                <h2 className="text-xl font-bold text-blue-800 mb-4">
                  Edit Profile
                </h2>
                <div className="space-y-3">
                  {[
                    "fullname",
                    "email",
                    "number",
                    "address",
                    "city",
                    "country",
                    "dob",
                  ].map((field) => (
                    <input
                      key={field}
                      type={field === "dob" ? "date" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field[0].toUpperCase() + field.slice(1)}
                      className="w-full border px-3 py-2 rounded-xl"
                    />
                  ))}
                </div>
                <div className="flex justify-end mt-4 gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      ) : (
        "User Not Found"
      )}
      <Footer />
    </div>
  );
};

export default UserProfile;
