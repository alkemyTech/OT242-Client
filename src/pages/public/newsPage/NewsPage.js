import './newsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { getReq } from '../../../helpers/ReqToApi';


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
    <div className="container_news">
<<<<<<< HEAD:src/pages/NewsPage/NewsPage.js
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
=======
          {/* replacement by request to the news service,
          I'm mapping an array I created, so it should be changed when it's ready.*/}


          <ul className="card_news" >

            {news.map(oneNews => (
                  <li key={oneNews.id}>
                    <Link to={`/news/${oneNews.id}`}>
                        <img src={oneNews.image} width={300} alt={oneNews.name} />
                        <h3 className="title_new">{oneNews.name}</h3>
                    </Link>
                  </li>
            ))}

          </ul>
>>>>>>> main:src/pages/public/newsPage/NewsPage.js

    </div>
  )
}
export default NewsPage