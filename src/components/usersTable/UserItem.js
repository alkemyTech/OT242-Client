import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { delReq } from "../../helpers/ReqToApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserItem = (props) => {

  const { id, firstName, lastName, email, roleId, createdAt, loadNews } = props;

  const navigate = useNavigate()

// función para eliminar novedad
  const deleteNew = async (id) => {
    try {
      await delReq(`/users/${id}`);
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
      confirmButtonText: "Si, borrar Usuario!",
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
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{roleId}</td>
        <td>{createdAt}</td>
        <td class="acciones">
          
            <MdOutlineDeleteOutline className="icon" onClick={() => {
              confirmDelete(id);
            }}/>
          
          <FiEdit className="icon" onClick={() => {navigate(`/backoffice/usersform/${id}`)}}/>
        </td>
      </tbody>
    </>
  );
};

export default UserItem;