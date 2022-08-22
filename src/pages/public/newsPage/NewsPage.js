import './NewsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { getReq } from '../../../helpers/ReqToApi';
import AnimatedPage from '../../../components/AnimatedPage';
import Card from '../../../components/cards/Card';

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
      <div className='newsContainer'>
         {news.map(oneNews => (
               <div className='newsCardContainer'>
                  <Card imageSource={"https://s3.sa-east-1.amazonaws.com/ot242-server/"+ oneNews.image } title={oneNews.name} text={oneNews.content} url={`/news/${oneNews.id}`}/>
               </div>
          ))}
      </div>

      </div>
    </AnimatedPage>
  )
}
export default NewsPage
