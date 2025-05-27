import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const token = localStorage.getItem(props.tokenName);
  const role = props.tokenName.replace("Token", "").toLowerCase(); // Safer extraction
  const navigate = useNavigate();

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

        if (!data.success) {
          navigate(props.redirect);
        }
      } catch (err) {
        console.error(err);
        navigate(props.redirect);
      }
    };

    if (token) {
      verifyFunction();
    } else {
      navigate(props.redirect);
    }
  }, []);

  if (!token) return <Navigate to={props.redirect} />;

  return props.children;
};

export default ProtectedRoutes;
