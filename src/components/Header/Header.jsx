// Archivos
import './Header.css';

// Hooks
import { useState } from 'react';

// Librerias
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {

 

    //  DISPLAY DE MENU CUANDO PANTALLA CHICA

    // variable que cambia para indicar display menu chico
    const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");

    // funcion que controla el display del menu
    const HandleMobileMenu = () => {
        if (showMobileMenu == "mobileMenuOff") {
          setShowMobileMenu("mobileMenuOn");
        } else {
            setShowMobileMenu("mobileMenuOff");
        }
    };




    return (
        <>

            <header className="header">
                <figure className="logo-container">
                    <Link to="/"><img src="./LOGO-SOMOS MAS.png" /></Link>
                </figure>
        
                {/* Responsive Icons */}
                {showMobileMenu === "mobileMenuOff"
                    ?  <FaBars className="hamburger" onClick={HandleMobileMenu}/>
                    : <FaTimes className="hamburger" onClick={HandleMobileMenu}/>
                }

                <ul className={showMobileMenu}>
                    <li><Link className='navItem' to="/" onClick={HandleMobileMenu}><b>Inicio</b></Link></li>
                    <li><Link className='navItem' to="/nosotros"  onClick={HandleMobileMenu}>Nosotros</Link></li>
                    <li><Link className='navItem' to="/novedades"  onClick={HandleMobileMenu}>Novedades</Link></li>
                    <li><Link className='navItem' to="/testimonios"  onClick={HandleMobileMenu}>Testimonios</Link></li>
                    <li><Link className='navItem' to="/contacto"  onClick={HandleMobileMenu}>Contacto</Link></li>
                    <li><Link className='navItem' to="/contribuye"  onClick={HandleMobileMenu}>Contribuye</Link></li>
                    <li><Link className='navItem' to="/login"  onClick={HandleMobileMenu}><button className='navBtn navLoginBtn'>Login</button></Link></li>
                    <li><Link className='navItem' to="/registrate"  onClick={HandleMobileMenu}><button className='navBtn navRegisBtn'>Registrate</button></Link></li>
                </ul>
                
            </header>
        </>
    )
}

export default Header;