import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getReq } from "../../../../helpers/ReqToApi";


const NewsDetail = () => {
  
  // read id property from url
  const {id} = useParams()
  console.log(id);
  
  const navigate = useNavigate();

  // declaring news variable
  const [ news, setNews] = useState({})

  useEffect(() => {
    getNewsDetail();
  }, []);

  const getNewsDetail = async () => {
    try {
      const res = await getReq(`/admin/news/${id}`);
      console.log(res.data)
      setNews(res.data);
    } catch (err) {
      Swal.fire("Error 404", "Esta novedad no existe", "error");
      navigate("/news");
    }
  };

  return (
    <div>
      <h1>Detalle de novedad con id {id}</h1>
      <h2>{news.name}</h2>
      <h5>{news.type}</h5>
      <img src={news.image}></img>
      <h3>{news.content}</h3>
      <br /><br />
      <Link to="/news">Volver</Link>
    </div>
  );
};

export default NewsDetail;
