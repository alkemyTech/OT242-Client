// archivos


// dependencias
import React, { useEffect } from "react";
import { FaRegNewspaper, FaRegUser } from "react-icons/fa"; // icono novedades, miembros
import { TbListCheck } from "react-icons/tb";  // icono actividades
import { BiCategory, BiMessageDetail, BiSlideshow } from "react-icons/bi";  // icono categorias, testimonios, slides
import { RiOrganizationChart } from "react-icons/ri"; // icono organixzacion
import { FiUsers } from "react-icons/fi"; // icono usuarios
import { Link, Navigate } from 'react-router-dom'; // uso los links para redirigir

import { BiEditAlt } from 'react-icons/bi';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogged } from "../../app/slices/userLogged/index";


// estilos
import './BackOffice.css';


function BackOffice() {
  let token = sessionStorage.getItem('token');

  // para actualizar store y renderizar el state actualizado
  const dispatch = useDispatch();
  // dentro de los reducers solo uso el que se llama user y me traigo la list que defini en initialState y le cambio el nombre
  const { currentUser } = useSelector(state => state.userLogged);


  // guardo variable rol para render condicional
  const rol = currentUser.rol;

  // actualizo el state del userLogged en el store
  useEffect(() => {
    dispatch(fetchUserLogged());
  }, [dispatch])


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