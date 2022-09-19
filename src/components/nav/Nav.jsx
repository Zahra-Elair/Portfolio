import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUserDelete } from "react-icons/ai";
import { RiServiceLine, RiMacbookLine, RiMessage2Fill } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNAv] = useState("");
    return (
        <nav>
            <a
                href="#"
                className={activeNav === "#" ? "active" : ""}
                onClick={() => {
                    setActiveNAv("#");
                }}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={() => {
                    setActiveNAv("#about");
                }}
            >
                <AiOutlineUserDelete />
            </a>
            <a
                href="#experience"
                className={activeNav === "#experience" ? "active" : ""}
                onClick={() => {
                    setActiveNAv("#experience");
                }}
            >
                <RiMacbookLine />
            </a>
            {/* <a href="#services" className={activeNav==="#services" ? 'active' : ''} onClick={()=>{setActiveNAv('#services')}}><RiServiceLine/></a> */}
            <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={() => {
                    setActiveNAv("#contact");
                }}
            >
                <RiMessage2Fill />
            </a>
        </nav>
    );
};

export default Nav;
