import React from 'react';


export const DeleteCat = (props) => {
    const { id, name } = props;

    return (
      <>    
            <option value={`${id} ${name}`}>{id} - {name}</option>
      </>

    );
}


