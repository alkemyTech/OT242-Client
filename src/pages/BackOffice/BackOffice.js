// archivos


// dependencias
import { FaRegNewspaper, FaRegUser } from "react-icons/fa"; // icono novedades, miembros
import { TbListCheck } from "react-icons/tb";  // icono actividades
import { BiCategory, BiMessageDetail, BiSlideshow } from "react-icons/bi";  // icono categorias, testimonios, slides
import { RiOrganizationChart } from "react-icons/ri"; // icono organixzacion
import { FiUsers } from "react-icons/fi"; // icono usuarios
import { Link } from 'react-router-dom'; // uso los links para redirigir

import { BiEditAlt } from 'react-icons/bi'; // edit


// estilos
import './BackOffice.css';


function BackOffice() {


  // listado con cada seccion a mostrar
  const secciones = [
    ["Novedades", <FaRegNewspaper className="backOffIcon" />, "/backoffice/news"], 
    ["Actividades", <TbListCheck className="backOffIcon" />, "/backoffice/activities"],
    ["Categorias", <BiCategory className="backOffIcon" />, "/backoffice/categories"],
    ["Testimonios", <BiMessageDetail className="backOffIcon" />, "/backoffice/testimonials"],
    ["Usuarios", <FaRegUser className="backOffIcon" />, "/backoffice/users"],
    ["Miembros", <FiUsers className="backOffIcon" />, "/backoffice/members"]
  ];

  return (
    <>
      
          <div className="backOffice">
                    {secciones.map(seccion => (
                    <div className="backOffColumn" key={seccion[0]}>
                      <div className="backOffCard" >
                        <h3>{seccion[0]}</h3>
                        <div>{seccion[1]}</div>
                        <Link to={seccion[2]}><button className="backOffButton">Ir</button></Link>
                      </div>
                    </div>
                ))}
                  {/* <div className="backOffColumn">
                  <div className="backOffCard">
                      <h3>Edit</h3>
                      <div><BiEditAlt className="backOffIcon"/></div>
                      <Link to="/userInfo"><button className="backOffButton">Ir</button></Link>
                    </div>
                  </div> */}
            
          </div>
        </>
      )}


export default BackOffice;