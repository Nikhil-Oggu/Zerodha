// index.js
import React from "react"; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./dashboard/dashboard.css";

/* LANDING PAGES */
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import LandingLayout from "./landing_page/LandingLayout";

/* DASHBOARD */
import DashboardLayout from "./dashboard/DashboardLayout";

import Dashboard from "./dashboard/components/Dashboard"; // Import the Dashboard component
import ProtectedRoute from "./dashboard/components/ProtectedRoute";
import { GeneralContextProvider } from "./dashboard/components/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* LANDING ROUTES */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

        {/* DASHBOARD ROUTES */}
        {/* Added /* to the path so it matches /dashboard/orders, etc. */}
        <Route
          path="/dashboard/*" 
          element={
            <ProtectedRoute>
              <GeneralContextProvider>
                <DashboardLayout />
              </GeneralContextProvider>
            </ProtectedRoute>
          }
        >
          {/* This renders the Dashboard.js component for any dashboard path */}
          <Route path="*" element={<Dashboard />} />
          
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);