import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Zahra Elair
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                {/* <li>
                    <a href="#services">Services</a>
                </li> */}
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a
                    href="https://www.facebook.com/ZahraElair.17/"
                    target={"_blank"}
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.linkedin.com/in/zahra-elair/"
                    target={"_blank"}
                >
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/Zahra-Elair" target={"_blank"}>
                    <FaGithub />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
