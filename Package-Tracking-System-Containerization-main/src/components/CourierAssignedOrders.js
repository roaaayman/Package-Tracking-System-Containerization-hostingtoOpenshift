import React, { useState, useEffect } from 'react';

function CourierAssignedOrders() {
  const [assignedOrders, setAssignedOrders] = useState([]);

  // Fetch assigned orders for the courier
  useEffect(() => {
    const courierID = localStorage.getItem('courierID');
    if (!courierID) {
        alert('Courier ID is missing');
        return;
    }
    async function fetchAssignedOrders() {
      try {
        const response = await fetch('http://localhost:3000/getassignedorders', {
          method: 'GET',
          headers: {
            'courierID': courierID,  
          },
        });
  
        if (response.ok) {
          const orders = await response.json();
          setAssignedOrders(orders);
        } else {
          console.error('Failed to fetch assigned orders');
          alert('Failed to fetch assigned orders. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching assigned orders:', error);
        alert('Error fetching assigned orders');
      }
    }
  
    fetchAssignedOrders();
  }, []);
  const updateOrderStatus=async(orderId,newStatus)=>
  {
    
    const courierId=localStorage.getItem("courierID");
    console.log("cid",courierId);
      console.log("oid",orderId);
      console.log("status",newStatus);
    try{
      const response= await fetch("http://localhost:3000/updateorderstatus" ,
        {
          method:"PUT",
          headers:{
            'Content-Type': 'application/json',
            'orderID':orderId,
            'courierID':courierId,
            'status':newStatus
          }
        }
      )
      

      if (response.ok)
      {
        alert("order status update successfully");
        setAssignedOrders(assignedOrders.map(order=>
          order.id===orderId ? {...order,status:newStatus}: order

        ));
      }else{
        alert("failed to update status")
      }
    }catch(error)
    {
      alert("error updating status");
    }
  }

  return (
    <div>
      <h1>Assigned Orders</h1>
      { assignedOrders.length > 0 ? (
        <ul>
          {assignedOrders.map((order) => (
            <form>
            <li key={order.id}>
              <div><b>Order ID:</b> {order.id}</div>
              <div><b>Package Details:</b> {order.packageDetails}</div>
              <div>
                <b>Pickup Location:</b> {order.pickupLocation}
                <br />
                <b>Drop-off Location:</b> {order.dropOffLocation}
                <br />
                <b>Delivery Time:</b> {order.deliveryTime}
                <br />
                <b>Status:</b> {order.status}
                <br/>
                <label>update Status: </label>
                <select id={`status-${order.id}`} 
                defaultValue={order.status} 
                onChange={(e) => updateOrderStatus(order.id, e.target.value)} 
                > 
                <option value="" disabled selected>select status</option>
                <option value="in_transit">In Transit</option>
                <option value="picked Up">picked Up</option>
                 <option value="delivered">Delivered</option>
                 </select>
              </div>
            </li>
            </form>
          ))}
        </ul>
      ) : (
        <p>No assigned orders</p>
      )}
    </div>
  );
}

export default CourierAssignedOrders;