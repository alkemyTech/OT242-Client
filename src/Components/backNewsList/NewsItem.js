import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const NewsItem = (props) => {
    const { id, name, image, createdAt } = props;

    return (
      <>
        <tbody>
          <th scope="row" style={{display:'none',}}>{id}</th>
          <td>{name}</td>
          <td>{image}</td>
          <td>{createdAt}</td>
          <td class="acciones">
             <FaTrash></FaTrash>
             <FaEdit></FaEdit>
          </td>
        </tbody>
      </>

    );
}

export default NewsItem;