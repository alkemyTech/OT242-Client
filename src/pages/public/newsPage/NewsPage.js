import './newsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { getReq } from '../../../helpers/ReqToApi';
import AnimatedPage from '../../../components/AnimatedPage';


const NewsPage = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsDetail();
  }, []);

  const getNewsDetail = async () => {
    try {
      const res = await getReq(`/admin/news`);
      console.log(res.data)
      setNews(res.data);
    } catch (err) {
      Swal.fire("Error 404", "No hay novedades", "error");
    }
  };

  return (
    <AnimatedPage>
    <div className="container_news">
      <h1 className="NewsTitle">Novedades</h1>
      <div className="container">
        <div className="row">
          {news.map(oneNews => (
            <div className="db-item col-md-6 newsItem">
              <Link to={`/news/:${oneNews.id}`}>
                <img className="img_new" src={oneNews.image} width={300} />
                <h3 className="title_new">{oneNews.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      </div>
    </AnimatedPage>
  )
}
export default NewsPage
