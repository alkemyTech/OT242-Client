import { useState, useEffect } from 'react';
import React from 'react';
import '../../pages/backOffice/newsPage/backofficeNews.css'
import { getReq } from '../../helpers/ReqToApi';
import { useNavigate } from 'react-router-dom';
import TestimonyItem from './TestimonyItem';
import Loader from '../Loader/Loader';



const TestimonyList = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const navigate = useNavigate()
  const loadNews = async () => {
    setLoading(true);
    const response = await getReq(`/testimonials`);
    setNews(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);


  return (
    <section className="holder">
      <h2>Listado de Testimonios</h2><br/>
      <button className='button-primary' onClick={()=>navigate('/backoffice/testimonialsform/')}>Agregar Testimonio +</button>
      <table className="news-table">
        <thead>
          <th>Nombre</th>
          {/* <th>Imagen</th> */}
          <th>Contenido</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? <Loader className='loader' size='small' colors={[]} /> : (
          news.map((item) => (
            <TestimonyItem
              key={item.id}
              id={item.id}
              name={item.name}
              content={item.content}
              loadNews={loadNews}
              createdAt={item.createdAt.slice(0, 10)}
            />
          ))
        )}
      </table>
    </section>
  );
};

export default TestimonyList;