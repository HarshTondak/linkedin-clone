import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Sidebar.css";
import logo from "./avatar.jpg";
import bg from "./bg.jpg";

function Sidebar() {
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bg} alt="" />
        <Avatar className="sidebar__avatar" src={logo} />
        <h2>Guts</h2>
        <h4>guts@berserk.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">796</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">965</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItems("react.js")}
        {recentItems("node.js")}
        {recentItems("web-dev")}
        {recentItems("android")}
        {recentItems("AI/ML")}
      </div>
    </div>
  );
}

export default Sidebar;
