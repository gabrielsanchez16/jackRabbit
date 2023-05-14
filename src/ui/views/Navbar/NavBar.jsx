import React from 'react'
import './assets/styles.css'
import logo from '../../assets/logo/logo.png'

import {Link} from 'react-router-dom'
const NavBar = () => {

    const toggleMenu = () => document.body.classList.toggle("open");


    return (
        <div className='contain-navbar'>
            <button onClick={toggleMenu} className="burger ">
                <span></span><span></span><span></span>
            </button>
            <nav className="navbar">
                <div className="logo">
                    <Link to={'/'}><img src={logo} /></Link>
                </div>
                <div className="search">
                    
                    <input
                        spellCheck="false"
                        type="text"
                        className="search"
                        id="search"
                        placeholder='Buscar'
                    />
                </div>
                <nav>
                    <button className="v"><Link to={'/about'}>Sobre Nosotros</Link></button>
                    <button className="v">Contactanos</button>
                </nav>
            </nav>
        </div>

    )
}

export default NavBar