import React, { useState, useEffect } from 'react';
import './assignorders.css';

const AssignOrders = () => {
  const [orders, setOrders] = useState([]);
  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchCouriers();
  }, []);

  // Fetch orders from the backend API
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/getallorders'); // Replace with your API URL
      const data = await response.json();
      setOrders(data); // Assuming the API response returns a list of orders
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Fetch couriers (you can replace this with a real API call)
  const fetchCouriers = async () => {
    try {
      const response = await fetch('http://localhost:3000/getAllCouriers'); // Replace with your API URL
      const data = await response.json();
      setCouriers(data); // Assuming the API response returns a list of couriers
    } catch (error) {
      console.error('Error fetching couriers:', error);
    }
  };

  const handleAssignOrder = async (orderId, courierName) => {
    try {
        console.log("cid", courierName);
        console.log("oid", orderId);
        // Here you can make an API call to assign the order to the courier
        const response = await fetch('http://localhost:3000/assignorder', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'orderID': orderId,
                'courierName': courierName,
            },
        });

        if (response.ok) {
            alert(`Order ${orderId} assigned to Courier ${courierName}`);
            // Optionally, you can refetch orders or update the state to reflect the changes
            fetchOrders();
        } else {
            alert('Failed to assign order');
        }
    } catch (error) {
        console.error('Error assigning order:', error);
    }
};

return (
    <div>
        <h1>Assign Orders to Courier</h1>
        <p>Select an order and assign it to a courier.</p>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Courier ID</th>
                        <th>Courier Name</th>
                        <th>Courier Phone</th>
                        <th>Assign Courier</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order.id}</td>
                            <td>{order.status}</td>
                            <td>{order.courierID || "N/A"}</td>
                            <td>{order.courierName || "N/A"}</td>
                            <td>{order.courierPhone || "N/A"}</td>
                            <td>
                                <select
                                    onChange={(e) => handleAssignOrder(order.id, e.target.value)}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Courier</option>
                                    {couriers.map((courier) => (
                                        <option key={courier.id} value={courier.name}>
                                            {courier.name} {/* Display courier name */}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default AssignOrders;
