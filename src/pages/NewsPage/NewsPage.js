import React from 'react'
import './newsPage.css'

// replace by request to the news service
// import data from '../../helpers/Api'

import { Link } from 'react-router-dom'

const NewsPage = () => {

  return (
    <div className="container_news">
          {/* replace by request to the news service */}
            {/* {data?.map(data => (
                <div className="card_news" key={data.id}>
                    <Link to={`/news/${data.id}`}>
                        <img src={data.image} width={300}/>
                        <h3 className="title_new">{data.title}</h3>
                    
                    </Link>
                </div>
            ))} */}

    </div>
  )
}

export default NewsPage