import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ListOfOrders.css"; // Import the CSS file

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        alert("Email is required");
        return;
      }

      const response = await fetch("http://localhost:3000/getuserorders", {
        method: "GET",
        headers: {
          "email": email,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      alert(error.message);
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const viewOrderDetails = (id) => {
    navigate(`/OrderDetails/${id}`);
  };

  return (
    <div>
      <header>
        <h1>User Orders</h1>
      </header>
      {orders.length === 0 ? (<form><center> <p>No orders found</p></center></form> ) :(
      <ul>
        {orders.map((order, index) => (
        <form>
          <li key={index}>
            <p><b>Order {index + 1}: </b>{order.id}</p>
            <p><b>Status: </b>{order.status}</p>
            <button type="button" onClick={() => viewOrderDetails(order.id)}>
              View Order Details
            </button>
          </li>
          </form>
        ))}
      </ul>
      )}</div>
  );
};

export default UserOrders;
