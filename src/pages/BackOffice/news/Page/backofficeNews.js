import { useState, useEffect } from 'react';
import NewsItem from '../../../../components/backNewsList/NewsItem';
import React from 'react';
import './backofficeNews.css'
import { getReq } from '../../../../helpers/ReqToApi';

const BackNewsPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    useEffect (() => {
      const loadNews = async () => {
        setLoading (true);
        const response = await getReq(`/admin/news`);
        setNews(response.data);
        setLoading(false);
      };

      loadNews();

    }, []);



  return (
    <section className="holder">
      <h2>Listado de Novedades</h2>
      <table className='news-table'>
        <thead>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? (
          <p>Cargando...</p>
        ) : (
            news.map(item => <NewsItem key={item.id}
              name={item.name} image={item.image}
              createdAt={item.createdAt.slice(0,10)} />)
        )}
       </table>
    </section>
  );
};

export default BackNewsPage;