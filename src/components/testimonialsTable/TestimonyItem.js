import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { delReq } from "../../helpers/ReqToApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TestimonyItem = (props) => {

  const { id, name, content, createdAt, loadNews } = props;

  const navigate = useNavigate()

// función para eliminar novedad
  const deleteNew = async (id) => {
    try {
      await delReq(`/testimonials/${id}`);
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
      confirmButtonText: "Si, borrar Testimonio!",
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
        <td>{content}</td>
        <td>{createdAt}</td>
        <td class="acciones">
          
            <MdOutlineDeleteOutline className="icon" onClick={() => {
              confirmDelete(id);
            }}/>
          
          <FiEdit className="icon" onClick={() => {navigate(`/backoffice/testimonialsform/${id}`)}}/>
        </td>
      </tbody>
    </>
  );
};

export default TestimonyItem;