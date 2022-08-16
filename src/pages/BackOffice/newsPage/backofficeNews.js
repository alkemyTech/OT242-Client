import { useState, useEffect } from 'react';
import NewsItem from '../../../components/backNewsList/NewsItem';
import React from 'react';
import './backofficeNews.css'
import { getReq } from '../../../helpers/ReqToApi';
import Button from '../../../components/buttons/Button';
import { Link, useNavigate } from 'react-router-dom';


const BackNewsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [cats, setCats] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const loadNews = async () => {
    setLoading(true);
    const response = await getReq(`/admin/news`);
    setNews(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    const loadCats = async () => {
      setLoading(true);
      const response = [
        {
          id: 1,
          name: "Donaciones",
        },
        {
          id: 2,
          name: "Actividades",
        },
        {
          id: 3,
          name: "Voluntariados",
        },
      ];
      setCats(response);
      setLoading(false);
    };

    loadCats();
  }, []);

  const onSubmit = () => {
    let id = value.split(" ")[0];
    let name = value.split(" ")[1];
    console.log(id);
    let msg = "La categoria fue eliminada correctamente";
    if (window.confirm(`Esta seguro que desea eliminar la categoria: ${name}`));
    try {
      //let del = await postReq (`/admin/categories/${id}`)
      console.log(msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="holder">
      <h2>Listado de Novedades</h2>
      <Button text="Agregar +" className={"button-primary"} onClick={()=> navigate("/newsform")}/>
      <table className="news-table">
        <thead>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </thead>
        {loading ? (
          <p>Cargando...</p>
        ) : (
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
      <div>
        <h5>Eliminar categorias de novedades</h5>
        <form>
          <select
            value={value}
            onChange={(event) => setValue(event.target.value)}
          >
            {loading ? (
              <p>Cargando...</p>
            ) : (
              cats.map((cat) => {
                return (
                  <>
                    <option key={cat.id} value={`${cat.id} ${cat.name}`}>
                      {cat.name}
                    </option>
                  </>
                );
              })
            )}
          </select>
          <Button
            type={"Button"}
            onClick={onSubmit}
            className={"button-secondary"}
            text={"Eliminar"}
          ></Button>
        </form>
      </div>
    </section>
  );
};

export default BackNewsPage;
