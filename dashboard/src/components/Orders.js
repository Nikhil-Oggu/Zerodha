import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import server from "../environment";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get(`${server}/allOrders`).then((res) => {
      setAllOrders(res.data);
    }).catch((err) => {
      console.error("Error fetching orders:", err);
    });
  };

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td className={order.mode === "BUY" ? "profit" : "loss"}>
                  {order.mode}
                </td>
                <td>
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
