// hooks
import React, { useEffect, useState } from 'react'

// dependencias
import { Link, useParams } from 'react-router-dom'

// archivos
import './NewsDetail.css';

// this is an array created by me to do the tests, DO NOT UNCOMMENT
// import Api from '../../helpers/Api'

const NewsDetail = () => {
    
  // declaring news variable
  const [ news, setNews] = useState({})

  // read id property from url
  const {id} = useParams()

  // fetch news data from api
  useEffect(() => {   
    axios
        .get(`http://localhost:8080/news/:${id}`)
        .then(res => {
            console.log(res);
            setNews(res.data);
        })
        .catch(err => {
            console.log(err)
        }
    )
}, []);


  return (
    <div className="container_news">
      <Link to="/news">Volver</Link>
      <div className="card_news">
          <img src={news?.image} width={300}/>
          <h3 className="title_new">{news?.title}</h3>
      </div>
    </div>
  )
}

export default NewsDetail