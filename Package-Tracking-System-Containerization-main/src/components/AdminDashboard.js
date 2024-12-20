// AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Function to navigate to manage orders
  const goToManageOrders = () => {
    navigate("/ManageOrders");
  };

  // Function to navigate to assign orders to couriers
  const goToAssignOrders = () => {
    navigate("/assignorders");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <center>
      <p>Welcome to the Admin Dashboard.</p>
      </center>
      <center>
      <form>
      <div>
        <div>
        <button onClick={goToManageOrders}>Manage Orders</button>
        </div>
        <div>
        <button  onClick={goToAssignOrders}>Assign Orders to Courier</button>
        </div>
      </div>
      </form>
      </center>
    </div>
  );
};

export default AdminDashboard;


