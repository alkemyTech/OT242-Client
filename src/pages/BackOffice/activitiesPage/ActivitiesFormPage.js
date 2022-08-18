import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReq } from '../../../helpers/ReqToApi'

import ActivitiesForm from '../../../components/forms/ActivitiesForm/ActivitiesForm'


const ActivitiesFormPage = () => {
    const [ activities, setActivities] = useState([]);
    const {id} = useParams();
    console.log(`hola soy ${id}`)
    const getData = async () => {
        const {data} = await getReq(`/admin/activities/${id}`);
        setActivities(data);
    };

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="container_news">
      <ActivitiesForm
      activities = {activities} />
    </div>
  )
}

export default ActivitiesFormPage