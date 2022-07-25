import React, { useState } from "react";
import "./actList.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

const data = [{
    id: 1,
    name: 'Tarea 1',
    content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    deletedAt: null,
},
{
    id: 2,
    name: 'Tarea 2',
    content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    deletedAt: null,
},
{
    id: 3,
    name: 'Tarea 3',
    content: 'ccccccccccccccccccccccccccccccccccccccccccccccccc',
    deletedAt: null,
},
{
    id: 4,
    name: 'Tarea 4',
    content: 'ddddddddddddddddddddddddddddddddddddddddddddddddd',
    deletedAt: null,
},
{
    id: 5,
    name: 'Tarea 5',
    content: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    deletedAt: null,
},
]

const ActList = (props) => {
    const [state, setState] = useState({
        data: data,
        updateModal: false,
        form: {
            id: '',
            name: '',
            content: '',
        }
    })

    const showUpdateModal = (activity) => {
        setState((prevState) => ({
            ...prevState,
            form: activity,
            updateModal: true
        }))
    }

    const closeUpdateModal = () => {
        console.log(state);
        setState(prevState => ({ ...prevState, updateModal: false }))
    }

    const handleChange = async (e) => {
        let nam = e.target.name;
        let value = e.target.value;
        await setState(prevState => ({
            ...prevState,
            form: {
                ...prevState.form,
                [nam]: [value]
            }
        }));

    }
    const editActivity = (activity) => {
        let counter = 0;
        let array = state.data;
        array.map((actv) => {
            if (activity.id == actv.id) {
                array[counter].name = activity.name;
                array[counter].content = activity.content;
            }
            counter++;
        });
        console.log(activity)
        setState((prevState) => ({ ...prevState, data: array, updateModal: false }));

    }

    const deleteActivity = (activity) => {
        if (activity.deletedAt === null) {
            let option = window.confirm("Estás Seguro que deseas la tarea " + activity.name + "?");
            if (option == true) {
                let counter = 0;
                let array = state.data;
                array.map((actv) => {
                    if (activity.id == actv.id) {
                        array[counter].deletedAt = Date().toLocaleString().toString();
                    }
                    counter++;
                });
                setState(prevState => ({ ...prevState, data: array, updateModal: false }));
            }
        }
        else { alert("Esta tarea ya ha sido eliminada"); }
    };

    return (
        <>
            <Container>
                <div className="table-responsive-md">
                    <Table className="table">
                        <thead className="tableHead">
                            <tr className="tableTr">
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Contenido</th>
                                <th>Eliminado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="tableBody">
                            {state.data.map((activity) => (
                                <tr className="tableTr">
                                    <td className="tableTd">{activity.id}</td>
                                    <td className="tableTd">{activity.name}</td>
                                    <td className="tableTd">{activity.content}</td>
                                    <td className="tableTd">{activity.deletedAt}</td>
                                    <td className="tableTd">
                                        <Button color="success" onClick={() => showUpdateModal(activity)}>Editar</Button>
                                        <Button color="danger" onClick={() => deleteActivity(activity)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </div>

            </Container>

            <Modal isOpen={state.updateModal}>
                <ModalHeader>
                    <div><h3>Editar Actividades</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Id:
                        </label>
                        <input
                            readOnly
                            type="text"
                            value={state.form.id}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Nombre:
                        </label>
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            value={state.form.name}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Contenido:
                        </label>
                        <input
                            className="form-control"
                            name="content"
                            type="text"
                            onChange={handleChange}
                            value={state.form.content}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => editActivity(state.form)}
                    >
                        Editar
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => closeUpdateModal()}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>

    )

}

export default ActList;