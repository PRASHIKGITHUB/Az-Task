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
  const [activeItem, setActiveItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item); // Set the clicked item as active
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="header">
        <button className="hamburger" onClick={toggleSidebar}>
          <img src={menu} alt="" /> 
        </button>
        {isOpen && <span className="logo-text"><img src={logo} alt="" /></span>}
      </div>
      <div className="sidebar-content">
        <ul className="menu">
          {[
            { name: "Dashboard", icon: dashboard },
            { name: "Learn", icon: learn },
            { name: "Forums", icon: forums },
            { name: "Upskill", icon: upskill },
            { name: "Contest", icon: contest },
            { name: "Leaderboard", icon: leaderboard },
          ].map((item) => (
            <li
              key={item.name}
              className={`menu-item ${isOpen ? "menu-item-open" : "menu-item-closed"} ${
                activeItem === item.name ? "active" : ""
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <span className="icon">
                <img style={{ width: "32px", height: "32px" }} src={item.icon} alt="" />
              </span>
              {isOpen && <span className="text">{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
