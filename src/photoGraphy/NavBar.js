import React from "react";
import { Link } from "react-scroll";
import { VscThreeBars } from "@react-icons/all-files/vsc/VscThreeBars";

import "./navBar.css";
function NavBar() {
  return (
    <>


      <div className="flex fixed z-20  w-full  bg-white ">
      <div className=" flex-1 items-center flex  gap-8 ml-5">
        <h1 className="text-3xl ml-16 font-black font-[Cinzel] cursor-none ">Foodado</h1>
      </div>
      <div className=" flex flex-1 items-center justify-center font-normal">
        <div className=" mr-20 flex-10">
          <ul className="list-none text-xl ml-12 flex gap-4  font-[Cinzel]   font-normal ">
            <li className=" cursor-pointer">
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
            <li className=" cursor-pointer">
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
            <li className=" cursor-pointer">
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
            <li className=" cursor-pointer">
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
            <li className=" cursor-pointer">
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
        <li className=" cursor-pointer  font-[Cinzel]  bg-[#152438] text-white border-[#152438]  transition-all duration-500 hover:bg-white hover:text-[#152438] border-[1px] mr-12 py-2 px-2 rounded-lg ">
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
    </>
  )
}

export default NavBar;
