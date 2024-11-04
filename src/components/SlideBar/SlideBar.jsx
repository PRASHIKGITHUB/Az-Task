// Sidebar.js

import React, { useState } from "react";
import "./SlideBar.css";
import dashboard from "../../assets/dashboard.png";
import learn from "../../assets/learn.png";
import forums from "../../assets/forums.png";
import upskill from "../../assets/upskill.png";
import contest from "../../assets/contest.png";
import leaderboard from "../../assets/leaderboard.png";
import menu from "../../assets/Menu.png";
import logo from "../../assets/az logo.png";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="header">
        <button className="hamburger" onClick={toggleSidebar}>
          <img src={menu} alt="" /> 
        </button>
        {isOpen && <span className="logo-text"><img  src={logo} alt="" /></span>}
      </div>
      <div className="sidebar-content">
        <ul className="menu">
          <li className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"}`} >
            <span className="icon"><img style={{width:'32px',height:'32px'} } src={dashboard} alt="" /></span>
            {isOpen && <span className="text">Dashboard</span>}
          </li>
          <li className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"}`}>
            <span className="icon"><img style={{width:'32px',height:'32px'} } src={learn} alt="" /></span>
            {isOpen && <span className="text">Learn</span>}
          </li>
          <li className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"}`}>
            <span className="icon"><img style={{width:'32px',height:'32px'} } src={forums} alt="" /></span>
            {isOpen && <span className="text">Forums</span>}
          </li>
          <li className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"}`}>
            <span className="icon"><img style={{width:'32px',height:'32px'} } src={upskill} alt="" /></span>
            {isOpen && <span className="text">Upskill</span>}
          </li>
          <li className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"}`}>
            <span className="icon"><img style={{width:'32px',height:'32px'} } src={contest} alt="" /></span>
            {isOpen && <span className="text">Contest</span>}
          </li>
          <li className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"}`}>
            <span className="icon"><img style={{width:'32px',height:'32px'} } src={leaderboard} alt="" /></span>
            {isOpen && <span className="text">Leaderboard</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
