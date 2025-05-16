// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useUser } from "../hooks/hooks";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {

//   let navigate = useNavigate();
//   let { user, setUser } = useUser(null);
//   let [orders, setOrders] = useState([]);
//   let [statusCount, setStatusCount] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   console.log(user);

//    // controlled form ke liye local state
//    const [formData, setFormData] = useState({
//     fullname: user?.fullname || "",
//     email: user?.email || "",
//     number: user?.number || "",
//     address: user?.address || "",
//     city: user?.city || "",
//     country: user?.country || "",
//     dob: user?.dob || "",
//   });


//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = window.localStorage.getItem("userToken");
//         const res = await fetch("http://localhost:3000/api/orders/my-orders", {
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${token}`,
//             role: "user",
//           },
//         });

//         let data = await res.json();

//         console.log(data);

//         if(data.message == 'invalid token') {
//           alert(data.message);
//           navigate('/login')
          
//         }

//         setOrders(data.orders);

//         // count by status
//         const counts = { pending: 0, shipping: 0, declined: 0 };
//         data.orders.forEach((order) => {
//           counts[order.status] = (counts[order.status] || 0) + 1;
//         });
//         setStatusCount(counts);
//       } catch (err) {
//         console.log("Error fetching orders", err);
//       }
//     };
//     fetchOrders();
//   }, []);


//   // for user update
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         fullname: user.fullname,
//         email: user.email,
//         number: user.number,
//         address: user.address,
//         city: user.city,
//         country: user.country,
//         dob: user.dob,
//       });
//     }
//   }, [user]);

 

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     const { fullname, email, number, address, city, country, dob } = formData;

//     if (
//       !fullname ||
//       !email ||
//       !number ||
//       !address ||
//       !city ||
//       !country ||
//       !dob
//     ) {
//       return alert("Please fill all fields");
//     }

//     try {
//       const res = await fetch("http://localhost:3000/api/user/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${window.localStorage.getItem("userToken")}`,
//           role: "user",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Profile updated!");
//         setUser(data.updatedUser);
//         setShowModal(false);
//       } else {
//         alert(data.message || "Failed to update");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       {user ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 md:px-20">
//           <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//               <img
//                 src={user.profileImage}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-2xl font-bold text-blue-800">
//                     {user.fullname}
//                   </h2>
//                   <button
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-xl text-sm"
//                     onClick={() => setShowModal(true)}
//                   >
//                     Edit Profile
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-500">Role: {user.role}</p>
//                 <div className="mt-4 space-y-1 text-gray-700">
//                   <p>
//                     <strong>Email:</strong> {user.email}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {user.number}
//                   </p>
//                   <p>
//                     <strong>Address:</strong> {user.address}, {user.city},{" "}
//                     {user.country}
//                   </p>
//                   <p>
//                     <strong>Date of Birth:</strong> {user.dob}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-xl font-semibold text-blue-700 mb-4">
//                 Your Orders
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {orders?.map((order) => (
//                   <div
//                     key={order._id}
//                     className="border rounded-xl p-4 flex items-center gap-4 bg-slate-50"
//                   >
//                     {/* <img
//                       src={order.orderItems[0].productId.image1}
//                       alt="product"
//                       className="w-16 h-16 rounded-lg object-cover"
//                     /> */}
//                     <div>
//                       <p className="font-semibold">Order #{order._id}</p>
//                       <p className="font-semibold">No. of Items : {order.orderItems.length}</p>
//                       <p className="text-sm text-gray-600">
//                         Date:{" "}
//                         {new Date(order.orderDate).toISOString().split("T")[0]}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Total: $ {order.totalAmount}
//                       </p>
//                       <span
//                         className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${
//                           order.status === "pending"
//                             ? "bg-yellow-200 text-yellow-800"
//                             : order.status === "shipping"
//                             ? "bg-green-200 text-green-800"
//                             : "bg-red-200 text-red-800"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 bg-white p-4 rounded-xl shadow flex justify-between text-sm text-gray-600">
//                 <p>Total Orders: {orders?.length}</p>
//                 <p>Pending: {statusCount ? statusCount.pending : ""}</p>
//                 <p>Shipped: {statusCount ? statusCount.shipping : ""}</p>
//                 <p>Declined: {statusCount ? statusCount.declined : ""}</p>
//               </div>
//             </div>
//           </div>

//           {/* Modal */}
//           {showModal && (
//             <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl"
//               >
//                 <h2 className="text-xl font-bold text-blue-800 mb-4">
//                   Edit Profile
//                 </h2>
//                 <div className="space-y-3">
//                   {[
//                     "fullname",
//                     "email",
//                     "number",
//                     "address",
//                     "city",
//                     "country",
//                     "dob",
//                   ].map((field) => (
//                     <input
//                       key={field}
//                       type={field === "dob" ? "date" : "text"}
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       placeholder={field[0].toUpperCase() + field.slice(1)}
//                       className="w-full border px-3 py-2 rounded-xl"
//                     />
//                   ))}
//                 </div>
//                 <div className="flex justify-end mt-4 gap-2">
//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-xl"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleUpdate}
//                     className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           )}
//         </div>
//       ) : (
//         "User Not Found"
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUser, useWishlist } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiMessageSquare,
  FiHome,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser(null);
  const [orders, setOrders] = useState([]);
  const {wishlist, setWishlist} = useWishlist();
  const [statusCount, setStatusCount] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    address: "",
    city: "",
    country: "",
    dob: "",
  });
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  console.log(wishlist);
  

  // Fetch user data
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

  // Fetch orders
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

        const data = await res.json();
        if (data.message === "invalid token") {
          alert(data.message);
          navigate("/login");
        }

        setOrders(data.orders);
        const counts = { pending: 0, shipping: 0, declined: 0 };
        data.orders.forEach((order) => {
          counts[order.status] = (counts[order.status] || 0) + 1;
        });
        setStatusCount(counts);
      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };
    fetchOrders();
  }, []);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
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
      } else {
        alert(data.message || "Failed to update");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { text: newMessage, sender: "user", time: new Date().toLocaleTimeString() },
      ]);
      setNewMessage("");
      // Here you would typically send the message to your backend
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome Back, {user?.fullname}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold">{orders?.length || 0}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-600">Wishlist Items</p>
                  <p className="text-2xl font-bold">{wishlist?.length || 0}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-600">Pending Orders</p>
                  <p className="text-2xl font-bold">{statusCount?.pending || 0}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user?.profileImage || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{user?.fullname}</h3>
                  <p className="text-gray-600 text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p>{user?.number || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Address</p>
                  <p>{user?.address || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-gray-500">City</p>
                  <p>{user?.city || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Country</p>
                  <p>{user?.country || "Not provided"}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user?.profileImage || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <button className="text-blue-600 text-sm">Change Photo</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type={key === "dob" ? "date" : "text"}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleUpdate}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Your Orders</h2>
            {orders?.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Order #{order._id.slice(-6)}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "shipping"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>{order.orderItems.length} items</p>
                      <p className="font-semibold">${order.totalAmount}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">You haven't placed any orders yet.</p>
            )}
          </div>
        );
      case "wishlist":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Your Wishlist</h2>
            {wishlist?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {wishlist.map((item) => (
                  <div key={item._id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <img
                      src={item.image1 || "https://via.placeholder.com/300"}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-blue-600 font-semibold">${item.price}</p>
                      <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Your wishlist is empty.</p>
            )}
          </div>
        );
      case "chat":
        return (
          <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Customer Support</h2>
            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
              {chatMessages.length > 0 ? (
                chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                        msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-10">
                  Start a conversation with our support team
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - 20% width */}
          <div className="w-full md:w-1/5 bg-white rounded-lg shadow">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-8">
                <img
                  src={user.profileImage || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{user.fullname}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <nav className="space-y-1">
                {[
                  { id: "overview", icon: <FiHome />, label: "Overview" },
                  { id: "profile", icon: <FiUser />, label: "Profile" },
                  { id: "orders", icon: <FiShoppingBag />, label: "Orders" },
                  { id: "wishlist", icon: <FiHeart />, label: "Wishlist" },
                  { id: "chat", icon: <FiMessageSquare />, label: "Chat" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left ${
                      activeTab === item.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-4 border-t">
                <button className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-100">
                  <FiSettings className="text-lg" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("userToken");
                    navigate("/login");
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-100"
                >
                  <FiLogOut className="text-lg" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - 80% width */}
          <div className="w-full md:w-4/5">{renderContent()}</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;
