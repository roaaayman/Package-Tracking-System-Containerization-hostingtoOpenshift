import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Email && Password) {
            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: Email, password: Password }),
                });

                const data = await response.json();  // Parse the response

                if (response.ok) {
                    alert(data.message);  // Show the success message from the server
                    console.log(data.userID)
                    // Save the user's email and role in local storage
                    localStorage.setItem('userEmail', Email);
                    localStorage.setItem('userRole', data.role);  
                    localStorage.setItem('courierID', data.userID);// Store the user role
                    localStorage.setItem('CourierName', data.username);// Store the user role
                    localStorage.setItem('courierPhone', data.phone);// Store the user role



                    // Navigate based on the user role
                    if (data.role === 'Admin') {
                        navigate("/AdminDashboard"); // Example for admin
                    } else if (data.role === 'Courier') {
                        navigate("/CourierHomeScreen"); // Example for courier
                    } else {
                        navigate("/UserHomeScreen"); // Default user role dashboard
                    }
                } else {
                    alert(data.message || "Login failed");  // Show the error message if login failed
                }
            } catch (error) {
                alert('An error occurred. Please try again later.');
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div>
            <center>
                <header>
                    <h1>Welcome Back!</h1>
                </header>
            </center>
            <main>
                <center>
                    <h2>Login</h2>
                </center>
            </main>
            <center>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" placeholder='Enter Email' value={Email} required onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <label>Password:</label>
                        <input type="password" placeholder='Enter Password' value={Password} required onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <button type="submit">Login</button>
                    </div>
                </form>
            </center>
        </div>
    );
}

export default Login;
