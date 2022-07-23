import React from 'react';
import 'bootstrap';
import DataTable from 'react-data-table-component';

import { useState, useEffect } from 'react';
import axios from 'axios';


const columnas = [
    {
        name: 'Hackathon', //texto de la columna
        selector: 'title',//debe machear al nombre de la propiedad
        sortable: true, // para sortear en base a esto
    },
    {
        name: 'First Place',
        selector: 'developers[0]',
        sortable: true,
    },
    {
        name: 'Second Place',
        selector: 'developers[1]',
        sortable: true,
    },
    {
        name: 'Third Place',
        selector: 'developers[2]',
        sortable: true,
    },
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
        /*axios
            .get("http://localhost:8080/hacklist")
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
            <main className='table-responsive'>
                <DataTable    
                columns={columnas}
                data={posts}
                title="Top Developers Ranking"
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