// archivos


// dependencias
import React from "react";
import { FaRegNewspaper, FaRegUser } from "react-icons/fa"; // icono novedades, miembros
import { TbListCheck } from "react-icons/tb";  // icono actividades
import { BiCategory, BiMessageDetail, BiSlideshow } from "react-icons/bi";  // icono categorias, testimonios, slides
import { RiOrganizationChart } from "react-icons/ri"; // icono organixzacion
import { FiUsers } from "react-icons/fi"; // icono usuarios
import { Link } from 'react-router-dom'; // uso los links para redirigir



// estilos
import './BackOffice.css';

// llamo a api para traer get req de toda la info de todos
// lo guardo todo en una lista para cada seccion como [titulo, descripcion y imagen],[]....
// renderizo cada uno como un card


function BackOffice() {


  // listado con cada seccion a mostrar
  const secciones = [
    ["Novedades", <FaRegNewspaper className="backOffIcon" />, "/news"], 
    ["Actividades", <TbListCheck className="backOffIcon" />, "/activities"],
    ["Categorias", <BiCategory className="backOffIcon" />, "/categories"],
    ["Testimonios", <BiMessageDetail className="backOffIcon" />, "/testimonies"],
    ["Organizacion", <RiOrganizationChart className="backOffIcon" />, "/organization"],
    ["Slides", <BiSlideshow className="backOffIcon" />, "/slides"],
    ["Usuarios", <FaRegUser className="backOffIcon" />, "/users"],
    ["Miembros", <FiUsers className="backOffIcon" />, "/members"]
  ]


  return (
    <>
      <body className="backOffice">
        {secciones.map(seccion => (
            <div className="backOffColumn" key={seccion[0]}>
              <div className="backOffCard" >
                <h3>{seccion[0]}</h3>
                <div>{seccion[1]}</div>
                <Link to={seccion[2]}><button className="backOffButton">Ir</button></Link>
              </div>
            </div>
        ))}
      </body>
    </>
  );
}

export default BackOffice;