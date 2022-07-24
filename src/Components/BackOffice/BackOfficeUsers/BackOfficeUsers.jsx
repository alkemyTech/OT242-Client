import React from 'react';
import DataTable from 'react-data-table-component';

import { useState, useEffect } from 'react';
import axios from 'axios';


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
    /*{
        name: 'Editar',
        selector: 'prueba[0]',
        sortable: true,
    },
    {
        name: 'Eliminar',
        selector: 'prueba[0]',
        sortable: true,
    }*/
]

const paginacionOpciones = {    // para la paginacion en español
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}



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
            })*/
    }, []);     //la lista vacia es para que solo haga la accion una vez

    
    //const customStyles = {};


    return ( 
        <>
            <main className='table-responsive table-users'>
                <DataTable    
                columns={columnas}
                data={posts}
                title="Listado de usuarios"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight='600px'
                />
            </main>
        </>
    );
}


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