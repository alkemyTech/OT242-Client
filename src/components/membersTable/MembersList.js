import { useState, useEffect } from 'react';
import React from 'react';
import '../../pages/backOffice/newsPage/backofficeNews.css'
import { getReq } from '../../helpers/ReqToApi';
import { useNavigate } from 'react-router-dom';
import MemberItem from './MemberItem';
import Loader from '../Loader/Loader';



const MembersList = (props) => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  //const [value, setValue] = useState("");
  const navigate = useNavigate()
  const loadMembers = async () => {
    setLoading(true);
    const response = await getReq(`/admin/members`);
    setMembers(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadMembers();
  }, []);


  return (
    <section className="holder">
      <h2>Listado de Miembros</h2><br/>
      <button className='button-primary' onClick={()=>navigate('/backoffice/membersform/')}>Agregar Miembro +</button>
      <table className="news-table">
        <thead>
          <th>Nombre</th>
          <th>Rol</th>
          <th>Descripción</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? <Loader className='loader' size='small' colors={[]} /> : (
          members.map((item) => (
            <MemberItem
              key={item.id}
              id={item.id}
              role={item.role}
              name={item.name}
              content={item.content.slice(0, 130) + '...'}
              loadMembers={loadMembers}
              createdAt={item.createdAt.slice(0, 10)}
            />
          ))
        )}
      </table>
    </section>
  );
};

export default MembersList;
