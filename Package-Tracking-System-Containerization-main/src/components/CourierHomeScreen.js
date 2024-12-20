import React from 'react';
import { useNavigate } from "react-router-dom";

const UserHomeScreen = () => {
    const navigate = useNavigate();

    const CourierDashboard = () => {
        navigate(`/CourierDashboard`);
      };
    const AssignOrders = () => {
        navigate(`/CourierAssignedOrders`);
      };
    
    return(
        <div>
            <center><header>
                <h1>Welcome Courier!</h1>
            </header></center>
            <main>
                <center>
                    <h2>Package Tracking System</h2>
                    <h2>Home Screen</h2>
                </center>
            </main>
            <center>
                <form>
                    <div>
                    <button type="button" onClick={() => CourierDashboard()}>
                    Courier Dashboard
                    </button>
                    <br/>
                    <button type="button" onClick={() => AssignOrders()}>
                    Assigned Orders
                    </button>
                    </div>
                </form>
            </center>
        </div>
);
}
export default UserHomeScreen;
