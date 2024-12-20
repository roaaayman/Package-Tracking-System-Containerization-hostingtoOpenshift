import React, { useState } from 'react';
import './CreateOrder.css';
import { useNavigate } from 'react-router-dom';


const Order = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [packageDetails, setPackageDetails] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userEmail = localStorage.getItem('userEmail');

        if (pickupLocation && dropOffLocation && packageDetails && deliveryTime) {
            try {
                const response = await fetch('http://localhost:3000/createorder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ pickupLocation, dropOffLocation, packageDetails, deliveryTime,userEmail }),
                });

                if (response.ok) {
                    alert("Order Created Successfully");
                    
                    navigate("/ListOfOrders");  
                } else {
                    const errorData = await response.text();
                    alert(errorData);  
                }
            } catch (error) {
                alert('An error occurred while creating the order. Please try again.');
            }
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div>
            <center>
                <header>
                    <h1>Create an Order</h1>
                </header>
            </center>
            <main>
                <center>
                    <h2>Package Tracking System</h2>
                    <h2>Create Order</h2>
                </center>
            </main>
            <center>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Pickup Location:</label>
                        <input type="text" placeholder='Enter Pickup Location' value={pickupLocation} required onChange={(e) => setPickupLocation(e.target.value)} />
                        <br />
                        <label>Drop-off Location:</label>
                        <input type="text" placeholder='Enter Drop-off Location' value={dropOffLocation} required onChange={(e) => setDropOffLocation(e.target.value)} />
                        <br />
                        <label>Package Details:</label>
                        <textarea placeholder='Enter Package Details' value={packageDetails} required onChange={(e) => setPackageDetails(e.target.value)} />
                        <br />
                        <label>Delivery Time:</label>
                        <input type="datetime-local" value={deliveryTime} required onChange={(e) => setDeliveryTime(e.target.value)} />
                        <br />
                        <br/>
                        <button type="submit">Create Order</button>
                    </div>
                </form>
            </center>
        </div>
    );
};

export default Order;
