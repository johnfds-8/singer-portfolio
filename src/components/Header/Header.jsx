import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [OpenMenu,SetOpenMenu]=useState(false)
    const getStyle = (OpenMenu)=>{
        if(document.documentElement.clientWidth <768){
            return {right: !OpenMenu && -300  }
        }
    }
  return (
    <section className="h-wrapper">
      <header className="h-container innerWidth">
        <nav className="nav ">
          <div className="nav-logo">
            <img src="./imusic.svg"  className="logo" alt="logo"></img>
            <h3 className="logo-name">Mr-fernandis</h3>
          </div>
          <OutsideClickHandler onOutsideClick={() => SetOpenMenu(false)}>
            <ul className="nav-items " style={getStyle(OpenMenu)}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/song">Song</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">
                  <button>Contact</button>
                </a>
              </li>
            </ul>
            <div className="menu-icon">
              <GiHamburgerMenu onClick={() => SetOpenMenu((prev) => !prev)} />
            </div>
          </OutsideClickHandler>
        </nav>
      </header>
    </section>
  );
};

export default Header;
