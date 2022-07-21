import React from 'react'
import './newPage.css'
import data from '../../helpers/Api'
import { Link } from 'react-router-dom'

const NewPage = () => {

  return (
    <div className="container_news">

            {data?.map(data => (
                <div className="card_news" key={data.id}>
                    <Link to={`/news/:${data.id}`}>
                        <img src={data.image} width={300}/>
                        <h3 className="title_new">{data.title}</h3>
                    
                    </Link>
                </div>
            ))}

    </div>
  )
}

export default NewPage