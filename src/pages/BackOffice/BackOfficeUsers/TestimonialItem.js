import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TestimonialItem = (props) => {
    const { id, name } = props;

    return (
      <>
        <tbody>
          <th scope="row" style={{display:'none',}}>{id}</th>
          <td>{name}</td>
          <td class="acciones">
             <FaTrash></FaTrash>
             <FaEdit> </FaEdit>
          </td>
        </tbody>
      </>

    );
}

export default TestimonialItem;