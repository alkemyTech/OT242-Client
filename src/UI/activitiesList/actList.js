import React from "react";
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
//Repleace 
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
class ActList extends React.Component {
    state = {
        data: data,
        updateModal: false,
        form: {
            id: '',
            name: '',
            content: '',
        }
    };

    showUpdateModal = (activity) => {
        this.setState({
            form: activity,
            updateModal: true,
        });
    };
    closeUpdateModal = () => {
        this.setState({ updateModal: false });
    };
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    editActivity = (activity) => {
        var counter = 0;
        var array = this.state.data;
        array.map((actv) => {
            if (activity.id == actv.id) {
                array[counter].name = activity.name;
                array[counter].content = activity.content;
            }
            counter++;
        });
        console.log(activity)
        this.setState({ data: array, updateModal: false });

    };

    deleteActivity = (activity) => {
        var option = window.confirm("Estás Seguro que deseas la tarea " + activity.name + "?");
        if (option == true) {
            var counter = 0;
            var array = this.state.data;
            array.map((actv) => {
                if (activity.id == actv.id) {
                    array[counter].deletedAt = Date().toLocaleString().toString();
                }
                counter++;
            });
            console.log(activity);
            this.setState({ data: array, updateModal: false });
        }
    };

    render() {
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
                                {this.state.data.map((activity) => (
                                    <tr className="tableTr">
                                        <td className="tableTd">{activity.id}</td>
                                        <td className="tableTd">{activity.name}</td>
                                        <td className="tableTd">{activity.content}</td>
                                        <td className="tableTd">{activity.deletedAt}</td>
                                        <td className="tableTd">
                                            <Button color="success" onClick={() => this.showUpdateModal(activity)}>Editar</Button>
                                            <Button color="danger" onClick={() => this.deleteActivity(activity)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>

                </Container>

                <Modal isOpen={this.state.updateModal}>
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
                                value={this.state.form.id}
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
                                onChange={this.handleChange}
                                value={this.state.form.name}
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
                                onChange={this.handleChange}
                                value={this.state.form.content}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="success"
                            onClick={() => this.editActivity(this.state.form)}
                        >
                            Editar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.closeUpdateModal()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>

        )
    }
}

export default ActList;