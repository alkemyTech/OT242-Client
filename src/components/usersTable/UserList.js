import { useState, useEffect } from 'react';
import React from 'react';
import '../../pages/backOffice/newsPage/backofficeNews.css'
import { getReq } from '../../helpers/ReqToApi';
import { useNavigate } from 'react-router-dom';
import UserItem from './UserItem';



const UserList = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const navigate = useNavigate()
  const loadNews = async () => {
    setLoading(true);
    const response = await getReq(`/users`);
    setNews(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);


  return (
    <section className="holder">
      <h2>Listado de Usuarios</h2><br/>
      <table className="news-table">
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Role Id</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          news.map((item) => (
            <UserItem
              key={item.id}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              roleId={item.roleId}
              loadNews={loadNews}
              createdAt={item.createdAt.slice(0, 10)}
            />
          ))
        )}
      </table>
    </section>
  );
};

export default UserList;