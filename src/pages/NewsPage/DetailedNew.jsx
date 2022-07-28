import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getReq } from "../../helpers/ReqToApi";

const DetailedNew = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [novedad, setNovedad] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const res = await getReq(`/novedad/${id}`);
      setNovedad(res.data);
    } catch (err) {
      Swal.fire("Error 404", "Esta novedad no existe", "error");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Detalle de novedad con id {id}</h1>
      <h2>{novedad.name}</h2>
      <h5>{novedad.type}</h5>
      <img src={novedad.image}></img>
      <h3>{novedad.content}</h3>
    </div>
  );
};

export default DetailedNew;
