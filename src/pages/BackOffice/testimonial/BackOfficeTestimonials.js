import { useState, useEffect } from 'react';
import React from 'react';
import './testimonials.css'
import { getReq } from '../../../helpers/ReqToApi';
import TestimonialItem from '../BackOfficeUsers/TestimonialItem';

const BackTestimonialPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

    useEffect (() => {
      const loadTestimonial = async () => {
        setLoading (true);
        const response = [{
          id: 1,
          name: 'Gonzalo'
         }, 
         {
          id: 2,
          name: 'Tomas'
         },
         {
          id: 3,
          name: 'Manuel'
         }];
        setTestimonials(response);
        setLoading(false);
      };

      loadTestimonial();

    }, []);



  return (
    <section className="holder">
      <h2>Listado de Testimonios</h2>
      <table className='backs-table'>
        <thead>
          <th>Nombre</th>
          <th>Acciones</th>
        </thead>
        {loading ? (
          <p>Cargando...</p>
        ) : (
            testimonials.map(item => <TestimonialItem key={item.id}
              name={item.name} />)
        )}
       </table>
    </section>
  );
};

export default BackTestimonialPage;