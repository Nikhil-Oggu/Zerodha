import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./landing.module.css";

export default function LandingLayout() {
  return (
    <div className={styles.landingRoot}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
