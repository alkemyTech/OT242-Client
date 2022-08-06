// files
import './NewsPage.css'


// hooks
import React, { useEffect, useState } from 'react'


// dependencies
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { getReq } from '../../../helpers/ReqToApi';



// this is an array created by me to do the tests, DO NOT UNCOMMENT
// import data from '../../helpers/Api'


const NewsPage = () => {


  // declaring data variable
  const [news, setNews] = useState([]);

  // traigo listado de novedades del backend 
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

    </div>
  )
}

export default NewsPage