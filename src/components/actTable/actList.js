import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table} from "reactstrap";
import { softDeleteActivity } from "../../app/slices/activities/activitiesSlice";

function ActList() {
    const activity = useSelector(state => state.activity)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(softDeleteActivity(id));
        console.log(activity);
    }
    return (
        <div className="table-responsive-md" style={{ margin: 100 }}>
            <Table className="table">
                <thead className="tableHead">
                    <tr className="tableTr">
                        <th>Nombre</th>
                        <th>Contenido</th>
                        <th>Eliminado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {activity.map(activity => (
                        <tr className="tableTr" key={activity.id}>
                            <td className="tableTd">{activity.name}</td>
                            <td className="tableTd">{activity.content}</td>
                            <td className="tableTd">{activity.deletedAt}</td>
                            <td className="tableTd">
                                <Link to={`/backoffice/activities/edit/${activity.id}`}> Edit </Link>
                                <button onClick={() => handleClick(activity.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default ActList;