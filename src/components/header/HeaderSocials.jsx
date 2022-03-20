import React from 'react'
import {BsLinkedin,BsGithub,BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/zahra-elair/" target={'_blank'}><BsLinkedin/></a>
            <a href="https://github.com/Zahra-Elair" target={'_blank'}><BsGithub/></a>
            <a href="https://www.facebook.com/profile.php?id=100071281239220" target={'_blank'}><BsFacebook/></a>
        </div>
    )
}

export default HeaderSocials