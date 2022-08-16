import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { delReq } from "../../helpers/ReqToApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NewsItem = (props) => {

  const navigate = useNavigate();

  const { id, name, image, createdAt, loadNews } = props;

// función para eliminar novedad
  const deleteNew = async (id) => {
    try {
      await delReq(`/admin/news/${id}`);
      loadNews()
    } catch (err) {
      console.log(err);
    }
  };

// función de confirmación para Sweet Alert 2
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar novedad!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNew(id);
      }
    });
  };

  return (
    <>
      <tbody>
        <th scope="row" style={{ display: "none" }}>
          {id}
        </th>
        <td>{name}</td>
        <td>{image}</td>
        <td>{createdAt}</td>
        <td class="acciones">
          <button
            onClick={() => {
              confirmDelete(id);
            }}
          >
            <FaTrash></FaTrash>
          </button>
          <button
            onClick={() => navigate(`/newsForm/${id}`)}
          >
            <FaEdit></FaEdit>
          </button>
        </td>
      </tbody>
    </>
  );
};

export default NewsItem;