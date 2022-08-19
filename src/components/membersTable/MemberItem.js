import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { delReq } from "../../helpers/ReqToApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MemberItem = (props) => {

  const { id, name, role, content, createdAt, loadMembers } = props;

  const navigate = useNavigate()

// función para eliminar novedad
  const deleteMember = async (id) => {
    try {
      await delReq(`/admin/members/${id}`);
      loadMembers()
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
      confirmButtonText: "Si, borrar miembro!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMember(id);
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
        <td>{role}</td>
        <td>{content}</td>
        <td>{createdAt}</td>
        <td class="acciones">
          
            <MdOutlineDeleteOutline className="icon" onClick={() => {
              confirmDelete(id);
            }}/>
          
          <FiEdit className="icon" onClick={() => {navigate(`/backoffice/membersform/${id}`)}}/>
        </td>
      </tbody>
    </>
  );
};

export default MemberItem;