import React from 'react';
import { useNavigate } from "react-router-dom";

const UserHomeScreen = () => {
    const navigate = useNavigate();

    const CreateOrder = () => {
        navigate(`/CreateOrder`);
      };
    const ListOfOrders = () => {
        navigate(`/ListOfOrders`);
      };
    
    return(
        <div>
            <center><header>
                <h1>Welcome User!</h1>
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
                    <button type="button" onClick={() => CreateOrder()}>
                    Create Order
                    </button>
                    <br/>
                    <button type="button" onClick={() => ListOfOrders()}>
                    My Orders
                    </button>
                    </div>
                </form>
            </center>
        </div>
);
}
export default UserHomeScreen;
