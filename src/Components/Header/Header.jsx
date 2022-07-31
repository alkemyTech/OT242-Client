// Archivos
import './Header.css';
import logo from './LOGO-SOMOS-MAS.png';

// Hooks
import { useState } from 'react';

// Librerias
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Logout
import { useDispatch } from 'react-redux'
import { logout } from '../../app/slices/userAuth'

function Header() {

    const dispatch = useDispatch()

    // traigo token de localStorage para render boton de login o logout
    let token = localStorage.getItem('token');


    


    // array con los items de navegacion [key, "Nombre", "path"] (dejo fuera botones de loggeo xq quieren importarlos como componente externo)
    const navItems = [[0, "Inicio", "/"],[1, "Nosotros", "/aboutUs"],[2, "Novedades", "/news"],[3, "Testimonios", "/testimonies"],[4, "Contacto", "/contact"], [5, "Contribuye", "/contribute"]];

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
                        ?   <li>
                                <button className='button' onClick={() => dispatch(logout())}>Logout</button>
                            </li>
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