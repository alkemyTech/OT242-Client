// librerias
import React from 'react';

import DataTable from 'react-data-table-component'; // para mostrar la tabla
import { useState, useEffect } from 'react';    // para llamado a api y renderizar data
import axios from 'axios';  //para llamado a la api
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

// columnas de tabla
const columnas = [
    {
        name: 'Nombre', //texto de la columna
        selector: row => row.firstName,
        sortable: true, // para sortear en base a esto
    },
    {
        name: 'Apellido',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Editar Usuario',
        // no se aclara asi que manejo el Edit como una redireccion
        selector: row => <Link to={"/backoffice/users/:" + String(row.id)}>Edit</Link>,
        sortable: true,
    },
    {
        name: 'Eliminar Usuario',
        selector: row => <p onClick={() => handleDelUser(String(row.id))}>Eliminar</p>,
        sortable: true,
    }
];



// manejo de delete
const handleDelUser = (id) => {
    console.log(id);
    /*axios
        .delete("http://localhost:8080/backoffice/userDelete", id) //chequear si el path es correcto
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        }
    )*/
    
};


// para la paginacion en español
const paginacionOpciones = {    
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};



const BackOfficeUsers = () => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {   
        setPosts(prueba);
        /*axios
            .get("http://localhost:8080/backoffice/users")  //chequear si el path es correcto
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            }
        )*/
    }, []);     //la lista vacia es para que solo haga la accion una vez

    
    //const customStyles = {};


    return ( 
        <>
            <div className='table-responsive table-users'>
                <DataTable    
                columns={columnas}
                data={posts}
                title="Listado de usuarios"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight='600px'
                />
                
            </div>
        </>
    );
};


export default BackOfficeUsers;


// data de prueba
const prueba = [
    {
        id: 1,
        firstName: "Josesito",
        lastName: "Josefo",
        email: "ejemplo@gmail.com",
    },
    {
        id: 2,
        firstName: "Josesito",
        lastName: "Goku",
        email: "chinchulin@gmail.com",
    },
    {
        id: 3,
        firstName: "Henry",
        lastName: "Albert",
        email: "fideos@gmail.com",
    }
]