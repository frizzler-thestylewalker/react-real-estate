import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="log" width={100} />

        <div className="flexCenter h-menu">
          <a href="#Residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#Contacts">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>

        <img src="" alt="" />
      </div>
    </section>
  );
}

export default Header;
