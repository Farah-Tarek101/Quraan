import React, { useState } from 'react';
import headerStyles from './header.module.css';
import Sidebar from './sidebar.jsx';
import Navbar from './navbar.jsx';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={headerStyles.header}>
        <button className={headerStyles.hamburger} onClick={toggleSidebar}>
          &#9776;
        </button>

        <div className={headerStyles.logoNavbarContainer}>
          <div className={headerStyles.logoContainer}>
      
          </div>

          <Navbar />
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
