import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editActivity, } from "../../app/slices/activities/activitiesSlice";
import { useNavigate, useParams } from 'react-router-dom';

function ActForm() {
    const [activity, setActivity] = useState({
        name: '',
        content: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const activities = useSelector(state => state.activity)

    const handleChange = e => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value,
        })
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        dispatch(editActivity(activity));
        navigate('/backoffice/activities');
    }

    useEffect(() => {
        if (params.id) {
            setActivity(activities.find((activity) => activity.id == params.id));
        }
    }, [params, activities]);

    return (
        <div style={{ margin: 100 }}>
        <h1>Editar una actividad</h1>
            <form onSubmit={handleSumbit} style={{ margin: 100 }}>
                <input
                    name='name'
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={activity.name}
                />
                <textarea
                    name="content"
                    placeholder="Contenido"
                    onChange={handleChange}
                    value={activity.content}
                />
                <button >Guardar</button>
            </form>
            
        </div>
    )
}

export default ActForm;