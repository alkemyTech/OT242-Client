import { useState, useEffect } from 'react';
import NewsItem from '../../../components/backNewsList/NewsItem';
import React from 'react';
import './backofficeNews.css'
import { getReq } from '../../../helpers/ReqToApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';



const BackNewsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate()
  const loadNews = async () => {
    setLoading(true);
    const response = await getReq(`/admin/news`);
    setNews(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);


  return (
    <section className="holder">
      <h2>Listado de Novedades</h2><br/>
      <button className='button-primary' onClick={()=>navigate('/newsform')}>Agregar Novedad +</button>
      <table className="news-table">
        <thead>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? <Loader className='loader' size='small' colors={[]} /> : (
          news.map((item) => (
            <NewsItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              loadNews={loadNews}
              createdAt={item.createdAt.slice(0, 10)}
            />
          ))
        )}
      </table>
    </section>
  );
};

export default BackNewsPage;
