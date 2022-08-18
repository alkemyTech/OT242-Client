// Archivos
import './Header.css';
import logo from './LOGO-SOMOS-MAS.png';

// Hooks
import { useState } from 'react';

// Librerias
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Logout
import { useDispatch } from 'react-redux'
import { logout } from '../../app/slices/userAuth'

function Header() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    //traigo usuario logeado para ver si es admin o no
    let user = JSON.parse(localStorage.getItem('dataUser002'))
    
    // traigo token de localStorage para render boton de login o logout
    let token = localStorage.getItem('token');

    // array con los items de navegacion [key, "Nombre", "path"] (dejo fuera botones de loggeo xq quieren importarlos como componente externo)
    const navItems = [[0, "Inicio", "/"],[1, "Nosotros", "/aboutUs"],[2, "Novedades", "/news"],[3, "Testimonios", "/testimonials"],[4, "Contacto", "/contact"], [5, "Contribuye", "/contribute"]];

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


    }
    return (
        <>

            <header className="header">
                <figure className="logo-container">
                    <img className='img-header' src={logo} />
                </figure>
        
                {/* Responsive Icons */}
                {showMobileMenu === "mobileMenuOff"
                    ?  <FaBars className="hamburger" onClick={HandleMobileMenu}/>
                    : <FaTimes className="hamburger" onClick={HandleMobileMenu}/>
                }

                <ul className={showMobileMenu + " ul-header"}>
                    {navItems.map(navItem => (
                        <li className='li-header' key={navItem[0]}><NavLink activeClassName='active' className='navItem' to={navItem[2]} onClick={HandleMobileMenu}>{navItem[1]}</NavLink></li>
                    ))}
                    {user  && user.roleId === 1 
                    ? <button className='navBtn navRegisBtn' onClick={() => navigate('/backoffice')}>BackOffice</button> : <></>}
                    {token 
                        ?   <li className='li-header'>
                                <button className='navBtn navLoginBtn' onClick={() => dispatch(logout())}>Logout</button>
                            </li>
                        :   <>  
                                <li className='li-header'><NavLink activeClassName='active' className='navItem' to="/login"  onClick={HandleMobileMenu}><button className='navBtn navLoginBtn'>Login</button></NavLink></li>
                                <li className='li-header'><NavLink activeClassName='active' className='navItem' to="/registrate"  onClick={HandleMobileMenu}><button className='navBtn navRegisBtn'>Registrate</button></NavLink></li>
                            </>
                    }
                </ul>
                
            </header>
        </>
    )
}

export default Header;