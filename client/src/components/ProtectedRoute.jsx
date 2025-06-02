// import React, { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProtectedRoutes = (props) => {
//   const token = localStorage.getItem(props.tokenName);
//   const role = props.tokenName.replace("Token", "").toLowerCase(); // Safer extraction
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyFunction = async () => {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/verify/${role}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${token}`,
//             role: role,
//           },
//         });

//         const data = await res.json();

//         if (!data.success) {
//           navigate(props.redirect);
//         } else {
//           return props.children;
//         }
//       } catch (err) {
//         toast.error(err);
//         navigate(props.redirect);
//       }
//     };

//     if (token) {
//       verifyFunction();
//     } else {
//       navigate(props.redirect);
//     }
//   }, []);
  
// };

// export default ProtectedRoutes;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoutes = (props) => {
  const token = localStorage.getItem(props.tokenName);
  const role = props.tokenName.replace("Token", "").toLowerCase();
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyFunction = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/verify/${role}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            role: role,
          },
        });

        const data = await res.json();

        if (data.success) {
          setIsVerified(true);
        } else {
          navigate(props.redirect);
        }
      } catch (err) {
        toast.error("Unauthorized or Network Error");
        navigate(props.redirect);
      }
    };

    if (token) {
      verifyFunction();
    } else {
      navigate(props.redirect);
    }
  }, []);

  // Jab tak verification ho rahi ho, null ya loader show karo
  if (!isVerified) return null;

  return <>{props.children}</>;
};

export default ProtectedRoutes;

