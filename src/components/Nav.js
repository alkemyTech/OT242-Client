import { Link } from "react-router-dom";
import React from "react";



const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="nav_list">
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/aboutUs">Nosotros</Link></li>
                  <li><Link to="/activities">Nuestras Actividades</Link></li>
                  <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
