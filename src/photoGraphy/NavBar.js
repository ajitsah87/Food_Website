import React from "react";
import { Link } from "react-scroll";
import { VscThreeBars } from "@react-icons/all-files/vsc/VscThreeBars";

import "./navBar.css";
function NavBar() {
  return (
    <>
    <div className="n-wrapper fixed z-20 bg-white ">
      <div className="n-left">
        <h1 className="n-name">Foodado</h1>
      </div>
      <div className="n-right">
        <div className="n-list ">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                spy={true}
                to="home"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="book"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <li className="btn n-btn font-normal ">
          <Link
            to="contact"
            activeClass="active_link"
            smooth={true}
            offset={-80}
            duration={300}
          >
            Contact
          </Link>
        </li>
       
      </div>
      <div className="drop">

        <VscThreeBars className="drop_icon" />
      </div>
        
    </div>
    
    {/* <div className="Dropdown_menu ">
    <div className="n-list ">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                spy={true}
                to="home"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="book"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                activeClass="active_link"
                smooth={true}
                offset={-80}
                duration={300}
              >
                Blog
              </Link>
            </li>
            <li className="btn n-btn font-normal ">
          <Link
            to="contact"
            activeClass="active_link"
            smooth={true}
            offset={-80}
            duration={300}
          >
            Contact
          </Link>
        </li>
          </ul>
        </div>
       
        </div> */}
    </>
  );
}

export default NavBar;
