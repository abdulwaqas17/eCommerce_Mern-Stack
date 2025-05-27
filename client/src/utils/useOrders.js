import { useState, useEffect } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`${import.meta.env.VITE_API_URL}/dashboard/orders`);
        let data = await res.json();
        setOrders(data.orders);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 

  // fetching orders from backend
  return { orders, loading, error };
};

export default useOrders;
