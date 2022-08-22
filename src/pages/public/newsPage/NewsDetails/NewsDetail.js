// react and style
import React, { useState, useEffect } from "react";
import './NewsDetail.css';

// files and components
import { getReq } from "../../../../helpers/ReqToApi";
import AnimatedPage from "../../../../components/AnimatedPage";
import Button from '../../../../components/buttons/Button'

//dependencies
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  


const NewsDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [ news, setNews] = useState({})


  useEffect(() => {
    getNewsDetail();
  }, []);

  const getNewsDetail = async () => {
    try {
      const res = await getReq(`/admin/news/${id}`);
      res.data.createdAt= res.data.createdAt.slice(0, 10);
      setNews(res.data);
    } catch (err) {
      Swal.fire("Error 404", "Esta novedad no existe", "error");
      navigate("/news");
    }
  };


  return (
   <AnimatedPage>
      <div className="newsDetailSection">
         <div className="newsDetailTextAndImg">
            <div className="newsDetailText">
               <h2 className="newsDetailTitle">{news.name}</h2>
               <h6 className="NewsDetailType">Categoria: {news.type}</h6>
               <h6 className="NewsDetailDate">Fecha de creacion: {news.createdAt}</h6>
            </div>
            <img src={"https://s3.sa-east-1.amazonaws.com/ot242-server/" + news.image} className="NewsDetailImg"></img>

         </div>
         
         <p className="NewsDetailContent">{news.content}</p>
         <br /><br />
         <Button onClick={()=> navigate("/news")} className="button-primary" text="Volver a listado de novedades"/>
    </div>
   </AnimatedPage>
  );
};

export default NewsDetail;
