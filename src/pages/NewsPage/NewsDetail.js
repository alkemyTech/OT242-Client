import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// replace by request to the news service
// import Api from '../../helpers/Api'

const NewsDetail = () => {
    const [ news, setNews] = useState({})
    const {id} = useParams()

    useEffect(() => {

      // replace by request to the news service
      // const detailNew = Api?.find(data => data.id === id)

      // setNews(detailNew)


    }, [])



  return (
    <div className="container_news">
      {/* <Link to="/news">Volver</Link>
      <div className="card_news">
          <img src={news.image} width={300}/>
          <h3 className="title_new">{news.title}</h3>
      </div> */}

    </div>
  )
}

export default NewsDetail