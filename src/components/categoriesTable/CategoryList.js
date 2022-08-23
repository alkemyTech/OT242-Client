import { useState, useEffect } from 'react';
import React from 'react';
import '../../pages/backOffice/newsPage/backofficeNews.css'
import { getReq } from '../../helpers/ReqToApi';
import { useNavigate } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import Loader from '../Loader/Loader';



const CategoryList = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  //const [value, setValue] = useState("");
  const navigate = useNavigate()
  const loadNews = async () => {
    setLoading(true);
    const response = await getReq(`/categories`);
    setNews(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);


  return (
    <section className="holder">
      <h2>Listado de Categorías</h2><br/>
      <button className='button-primary' onClick={()=>navigate('/backoffice/categoriesform/')}>Agregar Categoría +</button>
      <table className="news-table">
        <thead>
          <th>Nombre</th>
          {/* <th>Imagen</th> */}
          <th>Descripción</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? <Loader className='loader' size='small' colors={[]} /> : (
          news.map((item) => (
            <CategoryItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              loadNews={loadNews}
              createdAt={item.createdAt.slice(0, 10)}
            />
          ))
        )}
      </table>
    </section>
  );
};

export default CategoryList;