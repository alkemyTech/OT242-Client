import './Footer.css';
import React from 'react';
import Logo from './LOGO-SOMOS-MAS.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    let publicData = [
        {companyName: 'Somos Más'},
        {social: [{user: 'Somos_Más', icon: <FaFacebook className='icon-footer'/>, url: 'https://www.facebook.com/'},{user: 'SomosMás', icon: <FaInstagram className='icon-footer'/>, url: 'https://www.instagram.com/'}]},
        {logo: './LOGO-SOMOS-MAS.png'}
    ]
    let webLinks = [
        {name: 'Inicio', url: '/'},
        {name: 'Nosotros', url: '/aboutUs'},
        {name: 'Novedades', url: '/news'},
        {name: 'Testimonios', url: '/testimonials'},
        {name: 'Actividades', url: '/activities'},
        {name: 'Contacto', url: '/contact'}
        ]


  return (
   <div className='footerSection'>
      <li className='footerList'>{webLinks.map(webLink => 
         <ul><Link className='footerItem' to={webLink.url}>{webLink.name}</Link></ul>
         )}
      </li>
      <div className='footerIcons'>
         <a className='footerItem' href="https://www.facebook.com/" target="_blank"><FaFacebook className='footerIcon'/></a>
         <a className='footerItem' href="https://www.instagram.com/" target="_blank"><FaInstagram className='footerIcon'/></a>
      </div>
      <p className='footerRights'>2022 by Alkemy. All Rights Reserved.</p>
      <img className='footerLogo' alt="logo" src={Logo} />
   </div>
  )
}

export default Footer;

/*<div className="main-footer">
        <div className="container-footer">
            <div className="row-footer">
                // Column 1 
                <div className="col-footer">
                    <ul className='list-unstyled-footer'>
                        <h3>{publicData[0].companyName}</h3>
                        <li><img alt="logo" src={Logo} /></li>
                    </ul>
                    
                </div>
                // Column 2
                <div className="col-footer">
                    <h3>Links</h3>
                    <ul className='list-unstyled-footer'>
                        {webLinks.map(link => <li><a className="a-footer" href={link.url}>{link.name}</a></li>)}
                    </ul>
                </div>
                // Column 3 
                <div className="col-footer">
                    <h3>Redes Sociales</h3>
                    <ul className='list-unstyled-footer'>
                        {publicData[1].social.map(site => <li><a className='a-footer' target='_blank' href={site.url}>{site.icon} {site.user}</a></li>)}
                    </ul>
                </div>
            </div>
            // Bottom
            <div className="row-footer">
                <p>2022 by Alkemy. All Rights Reserved.</p>
            </div>
        </div>
      
   </div>*/