
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./dashboard/dashboard.css";

/* ================= LANDING PAGES ================= */
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";


import LandingLayout from "./landing_page/LandingLayout";



/* ================= DASHBOARD ================= */
import DashboardLayout from "./dashboard/DashboardLayout";


import Home from "./dashboard/components/Home";
import ProtectedRoute from "./dashboard/components/ProtectedRoute";
import { GeneralContextProvider } from "./dashboard/components/GeneralContext";
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* ================= LANDING ROUTES ================= */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

        {/* ================= DASHBOARD ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <GeneralContextProvider>
                <DashboardLayout />
              </GeneralContextProvider>
            </ProtectedRoute>
          }
        >
          <Route path="*" element={<Home />} />
        </Route>
        

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
