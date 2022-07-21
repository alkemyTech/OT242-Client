// dependencias
import React from "react";

// estilos
import './BackOffice.css';

// llamo a api para traer get req de toda la info de todos
// lo guardo todo en una lista para cada seccion como [titulo, descripcion y imagen],[]....
// renderizo cada uno como un card


function BackOffice() {

  // listado con cada seccion a mostrar
  const secciones = ["Bienvenidos", "Nosotros", "Novedades", "Testimonios", "Equipo"]



  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <h3>Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <h3>Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
      

      
    </>
  );
}

export default BackOffice;