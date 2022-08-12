import './Footer.css';
import React from 'react';
import Logo from './LOGO-SOMOS-MAS.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    let publicData = [
        {companyName: 'Somos Más'},
        {social: [{user: 'Somos_Más', icon: <FaFacebook className='icon-footer'/>, url: 'facebook.com/'},{user: 'SomosMás', icon: <FaInstagram className='icon-footer'/>, url: 'instagram.com/'}]},
        {logo: './LOGO-SOMOS-MAS.png'}
    ]
    let webLinks = [{name: 'Inicio', url: '/'},
        {name: 'Nosotros', url: '/nosotros'},
        {name: 'Novedades', url: '/novedades'},
        {name: 'Testimonios', url: '/testimonios'},
        {name: 'Contacto', url: '/contacto'},
        {name: 'Contribuye', url: '/contribuye'}]
    
  return (
    <div className="main-footer">
        <div className="container-footer">
            <div className="row-footer">
                {/* Column 1 */}
                <div className="col-footer">
                    <ul className='list-unstyled-footer'>
                        <h3>{publicData[0].companyName}</h3>
                        <li><img alt="logo" src={Logo} /></li>
                    </ul>
                    
                </div>
                {/* Column 2 */}
                <div className="col-footer">
                    <h3>Links</h3>
                    <ul className='list-unstyled-footer'>
                        {webLinks.map(link => <li><a className="a-footer" href={link.url}>{link.name}</a></li>)}
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col-footer">
                    <h3>Redes Sociales</h3>
                    <ul className='list-unstyled-footer'>
                        {publicData[1].social.map(site => <li><a className='a-footer' href={site.url}>{site.icon} {site.user}</a></li>)}
                    </ul>
                </div>
            </div>
            {/* Bottom */}
            <div className="row-footer">
                <p>2022 by Alkemy. All Rights Reserved.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer