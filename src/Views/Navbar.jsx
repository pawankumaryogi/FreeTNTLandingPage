import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="head">
        <ul className="menuBlock">
          <li className="menu">
            <a href="#temple-dying" className="">
              {" "}
              Dying Temples
            </a>
          </li>
          <li className="menu">
            <a href="#free-temple">Free Temples</a>
          </li>
          <li className="menu">
            <a href="#heartbreaking_stories">Heartbreaking Stories</a>
          </li>
          <li className="menu">
            <a href="#HR_AND_CE">HR&amp;CE</a>
          </li>
          <li className="menu">
            <a href="#past_glory">Past Glory</a>
          </li>
          <li className="menu">
            <a href="#get_involved">Get In Touch</a>
          </li>
          <li className="menu">
            <a href="#media">Media</a>
          </li>
        </ul>
        <div className="langBlock">
          <p style={{ color: "#febd2c" }}>English</p> &nbsp;|
          <p className="">&nbsp; Tamil</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
