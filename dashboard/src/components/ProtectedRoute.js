import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import server from "../environment";
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        // Verify token with backend
        const response = await axios.get(`${server}/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.user) {
          setIsAuthenticated(true);
          // Update user data if needed
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "1.2rem",
        color: "#666"
      }}>
        Loading dashboard...
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to signup/login page
    window.location.href = "http://localhost:3001/signup";
    return null;
  }

  return children;
};

export default ProtectedRoute;
