import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getReq } from "../../../helpers/ReqToApi";
import "./NewsDetail.css";

const NewsDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [ news, setNews] = useState({})


  useEffect(() => {
    getNewsDetail();
  }, []);

  const getNewsDetail = async () => {
    try {
      const res = await getReq(`/news/${id}`);
      setNews(res.data);
    } catch (err) {
      Swal.fire("Error 404", "Esta novedad no existe", "error");
      navigate("/news");
    }
  };

  return (
    <div className="container">
      <h1 className="New-Details-title">{news.name}</h1>
      <h5 className="New-Details-type">{news.type}</h5>
      <img src={news.image} className="New-Details-img"></img>
      <h3 className="New-Details-content">{news.content}</h3>
      <br /><br />
      <Link to="/news" className="New-Details-go-back">Volver</Link>
    </div>
  );
};

export default NewsDetail;
