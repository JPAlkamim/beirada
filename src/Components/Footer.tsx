import React from 'react'
import Logo from '../assets/LogoFooter.png'

export const Footer = () => {
    return (
        <footer className="flex w-full h-40 items-center justify-center z-10" style={{backgroundColor: "#292822"}}>
            <img src={Logo} alt="logo" className="logoImage" style={{width: '200px'}} />
            <p style={{color: '#FCF9F7', fontFamily: 'barlowRegular'}}>© 2024 Na Risca do Futebol Amador</p>
        </footer>
    )
}