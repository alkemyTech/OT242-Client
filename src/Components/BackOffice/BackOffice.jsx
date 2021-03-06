// archivos


// dependencias
import React, { useEffect, useState } from "react";
import { FaRegNewspaper, FaRegUser } from "react-icons/fa"; // icono novedades, miembros
import { TbListCheck } from "react-icons/tb";  // icono actividades
import { BiCategory, BiMessageDetail, BiSlideshow } from "react-icons/bi";  // icono categorias, testimonios, slides
import { RiOrganizationChart } from "react-icons/ri"; // icono organixzacion
import { FiUsers } from "react-icons/fi"; // icono usuarios
import { Link, Navigate, useNavigate } from 'react-router-dom'; // uso los links para redirigir

import { BiEditAlt } from 'react-icons/bi'; // edit


// estilos
import './BackOffice.css';



function BackOffice() {

  // defino useNav para redirigir si no esta logeado y variable rol
  const navigate = useNavigate();
  const [rol, setRol] = useState('');


  // control de login y paso rol a variable
  useEffect( () => {

    // traigo token para chequeo de login
    const token = localStorage.getItem('token');
    if ( token === undefined ) {
      navigate("/");
    };

    // defino rol
    const user = localStorage.getItem('dataUser002');
    setRol(user.roleId);


  },[])



  // traigo usuario y de ahi extraigo 
  const user = localStorage.getItem('dataUser002');


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
      {token === false ? <Navigate to="/" /> :
        <>
          <div className="backOffice">
            {rol === 'administrador' ? 
              <>
                {secciones.map(seccion => (
                    <div className="backOffColumn" key={seccion[0]}>
                      <div className="backOffCard" >
                        <h3>{seccion[0]}</h3>
                        <div>{seccion[1]}</div>
                        <Link to={seccion[2]}><button className="backOffButton">Ir</button></Link>
                      </div>
                    </div>
                ))}
              </>
              : <>
                  <div className="backOffColumn">
                  <div className="backOffCard">
                      <h3>Edit</h3>
                      <div><BiEditAlt className="backOffIcon"/></div>
                      <Link to="/userInfo"><button className="backOffButton">Ir</button></Link>
                    </div>
                  </div>
                </>
            }
          </div>
        </>
      }
    </>
  );
}

export default BackOffice;