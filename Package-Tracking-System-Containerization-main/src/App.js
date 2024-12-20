import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import ListOfOrders from './components/ListOfOrders';
import CreateOrder from './components/CreateOrder';
import AdminDashboard from './components/AdminDashboard';
import AssignOrders from './components/assignorders'; // Note the correct component name
import CourierDashboard from './components/CourierDashboard'; // Import the CourierDashboard component
import ManageOrders from './components/ManageOrders'; // Import ManageOrders component
import OrderDetails from './components/OrderDetails';
import CourierAssignedOrders from './components/CourierAssignedOrders';
import UserHomeScreen from './components/UserHomeScreen';
import CourierHomeScreen from './components/CourierHomeScreen';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/ListOfOrders" element={<ListOfOrders />} />
        <Route path="/" element={<Registration />} />
        <Route path="/createorder" element={<CreateOrder />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/assignorders" element={<AssignOrders />} />
        <Route path="/CourierDashboard" element={<CourierDashboard />} /> {/* Courier Dashboard route */}
        <Route path="/manageorders" element={<ManageOrders />} />  {/* Add route for ManageOrders */}
        <Route path="/OrderDetails/:id" element={<OrderDetails />}/>
        <Route path="/CourierAssignedOrders" element={<CourierAssignedOrders />}/>
        <Route path="/UserHomeScreen" element={<UserHomeScreen />}/>
        <Route path="/CourierHomeScreen" element={<CourierHomeScreen />}/>



      </Routes>
    </Router>
  );
}

export default App;
