// src/pages/MyOrders.jsx

import React from 'react';
import '../css/MyOrders.css';

const MyOrders = () => {
    const orders = [
        {
            id: 1,
            date: '2024-06-30',
            items: ['Pizza', 'Pasta', 'Salad'],
            total: 30.50,
            status: 'Delivered'
        },
        {
            id: 2,
            date: '2024-06-29',
            items: ['Burger', 'Fries'],
            total: 15.00,
            status: 'Pending'
        },
        {
            id: 3,
            date: '2024-06-28',
            items: ['Sushi', 'Miso Soup'],
            total: 22.75,
            status: 'Delivered'
        },
        {
            id: 4,
            date: '2024-06-27',
            items: ['Tacos', 'Guacamole'],
            total: 18.25,
            status: 'Delivered'
        },
        {
            id: 5,
            date: '2024-06-26',
            items: ['Steak', 'Baked Potato'],
            total: 35.00,
            status: 'Pending'
        },
        {
            id: 6,
            date: '2024-06-25',
            items: ['Chicken Alfredo'],
            total: 18.75,
            status: 'Pending'
        },
        {
            id: 7,
            date: '2024-06-24',
            items: ['Chicken Tenders', 'Onion Rings'],
            total: 12.50,
            status: 'Pending'
        },
        {
            id: 8,
            date: '2024-06-23',
            items: ['Buffalo Wings', 'Celery'],
            total: 14.75,
            status: 'Delivered'
        },
        {
            id: 9,
            date: '2024-06-22',
            items: ['Nachos', 'Queso'],
            total: 16.25,
            status: 'Pending'
        },
        {
            id: 10,
            date: '2024-06-21',
            items: ['Cheeseburger', 'Sweet Potato Fries'],
            total: 20.00,
            status: 'Pending'
        }
    ];

    return (
        <div className="orders-view">
            {/* <h2 className='title'>My Orders</h2> */}
            <div className="orders-container">
                {orders.map(order => (
                    <div key={order.id} className="order-card">
                        <h3>Order #{order.id}</h3>
                        <p><strong>Date:</strong> {order.date}</p>
                        <p><strong>Items:</strong> {order.items.join(', ')}</p>
                        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                        <p><strong>Status:</strong> {order.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
