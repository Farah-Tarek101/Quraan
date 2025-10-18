import React, { useState } from 'react';
import headerStyles from './headertwo.module.css';
import Navbar from '../components/navbar.jsx';
import Sidebar from './sidebar.jsx';
function Headertwo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={headerStyles.header}>
      {/* Sidebar Toggle Button */}
      <button className={headerStyles.hamburger} onClick={toggleSidebar}>
        &#9776; {/* Unicode character for hamburger menu */}
      </button>

      {/* Logo and Navbar Container */}
      <div className={headerStyles.logoNavbarContainer}>
        <div className={headerStyles.logoContainer}>
          <span className={headerStyles.logoName}>MAAT</span>
        </div>

        {/* Navigation Bar */}
        <Navbar />
      </div>

      

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}

export default Headertwo;