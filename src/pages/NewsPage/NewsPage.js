// files
import './NewsPage.css'


// hooks
import React, { useEffect, useState } from 'react'


// dependencies
import { Link } from 'react-router-dom'


// this is an array created by me to do the tests, DO NOT UNCOMMENT
// import data from '../../helpers/Api'


const NewsPage = () => {

  // declaring data variable
  const [data, setData] = useState([]);

  

  return (
    <div className="container_news">
          {/* replacement by request to the news service,
          I'm mapping an array I created, so it should be changed when it's ready.*/}


          <ul className="card_news" >

            {/* {data?.map(data => (
                  <li key={data.id}>
                    <Link to={`/news/${data.id}`}>
                        <img src={data.image} width={300}/>
                        <h3 className="title_new">{data.title}</h3>
                    </Link>
                  </li>
            ))} */}

          </ul>

    </div>
  )
}

export default NewsPage