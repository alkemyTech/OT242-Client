// Archivos
import './Header.css';
import logo from './LOGO-SOMOS-MAS.png';

// Hooks
import { useState } from 'react';

// Librerias
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {

    // traigo token de localStorage para render boton de login o logout
    let token = sessionStorage.getItem('token');


    


    // array con los items de navegacion [key, "Nombre", "path"] (dejo fuera botones de loggeo xq quieren importarlos como componente externo)
    const navItems = [[0, "Inicio", "/"],[1, "Nosotros", "/nosotros"],[2, "Novedades", "/novedades"],[3, "Testimonios", "/testimonios"],[4, "Contacto", "/contacto"], [5, "Contribuye", "/contribuye"]];

    //  DISPLAY DE MENU CUANDO PANTALLA CHICA

    // variable que cambia para indicar display menu chico
    const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");

    // funcion que controla el display del menu
    const HandleMobileMenu = () => {
        if (showMobileMenu === "mobileMenuOff") {
          setShowMobileMenu("mobileMenuOn");
        } else {
            setShowMobileMenu("mobileMenuOff");
        }
    };




    return (
        <>

            <header className="header">
                <figure className="logo-container">
                    <Link to="/"><img src={logo} /></Link>
                </figure>
        
                {/* Responsive Icons */}
                {showMobileMenu === "mobileMenuOff"
                    ?  <FaBars className="hamburger" onClick={HandleMobileMenu}/>
                    : <FaTimes className="hamburger" onClick={HandleMobileMenu}/>
                }

                <ul className={showMobileMenu}>
                    {navItems.map(navItem => (
                        <li key={navItem[0]}><Link className='navItem' onClick={HandleMobileMenu} to={navItem[2]}>{navItem[1]}</Link></li>
                    ))}

                    {token 
                        ?   <li><Link className='navItem' to="/logout"  onClick={HandleMobileMenu}><button className='navBtn navLoginBtn'>Logout</button></Link></li>
                        :   <>  
                                <li><Link className='navItem' to="/login"  onClick={HandleMobileMenu}><button className='navBtn navLoginBtn'>Login</button></Link></li>
                                <li><Link className='navItem' to="/registrate"  onClick={HandleMobileMenu}><button className='navBtn navRegisBtn'>Registrate</button></Link></li>
                            </>
                    }
                </ul>
                
            </header>
        </>
    )
}

export default Header;