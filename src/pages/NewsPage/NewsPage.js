// files
import './NewsPage.css'


// hooks
import React, { useEffect, useState } from 'react'


// dependencies
import { Link } from 'react-router-dom'
import axios from 'axios';


// this is an array created by me to do the tests, DO NOT UNCOMMENT
// import data from '../../helpers/Api'


const NewsPage = () => {

  // declaring data variable
  const [news, setNews] = useState([]);

  // traigo listado de novedades del backend
  useEffect(() => {   
    axios
        .get("http://localhost:8080/news")  //chequear si el path es correcto
        .then(res => {
            console.log(res);
            setNews(res.data);
        })
        .catch(err => {
            console.log(err)
        }
    )
}, []);     //la lista vacia es para que solo haga la accion una vez
  

  return (
    <div className="container_news">
          {/* replacement by request to the news service,
          I'm mapping an array I created, so it should be changed when it's ready.*/}


          <ul className="card_news" >

            {news.map(oneNews => (
                  <li key={oneNews.id}>
                    <Link to={`/news/${oneNews.id}`}>
                        <img src={oneNews.image} width={300} />
                        <h3 className="title_new">{oneNews.title}</h3>
                    </Link>
                  </li>
            ))}

          </ul>

    </div>
  )
}

export default NewsPage