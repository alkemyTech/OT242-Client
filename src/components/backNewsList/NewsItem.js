import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { delReq } from "../../helpers/ReqToApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NewsItem = (props) => {

  const { id, name, image, createdAt, loadNews } = props;

  const navigate = useNavigate()

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
        <td><img src={'https://s3.sa-east-1.amazonaws.com/ot242-server/' + image} style={{ width: "70px", height: "50px" }}/> </td>
        <td>{createdAt}</td>
        <td class="acciones">
          
            <MdOutlineDeleteOutline className="icon" onClick={() => {
              confirmDelete(id);
            }}/>
          
          <FiEdit className="icon" onClick={() => {navigate(`/newsform/${id}`)}}/>
        </td>
      </tbody>

    </>
  );
};

export default NewsItem;