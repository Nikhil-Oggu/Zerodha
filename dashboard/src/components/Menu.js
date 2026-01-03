// import React from "react";

// const Menu = () => {
//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <p>Dashboard</p>
//           </li>
//           <li>
//             <p>Orders</p>
//           </li>
//           <li>
//             <p>Holdings</p>
//           </li>
//           <li>
//             <p>Positions</p>
//           </li>
//           <li>
//             <p>Funds</p>
//           </li>
//           <li>
//             <p>Apps</p>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  // 1. Define the missing function to fix the crash
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="menu-container">
      {/* 2. Added alt prop to fix the warning we saw earlier */}
      <img src="logo.png" style={{ width: "25px" }} alt="Logo" />
      
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;