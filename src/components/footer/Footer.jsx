import React from 'react'
import './footer.css'
import {FaFacebookF,FaInstagram,FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Zozo</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer