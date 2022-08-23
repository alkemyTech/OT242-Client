import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReq } from '../../../helpers/ReqToApi'

import UsersForm from '../../../components/forms/UsersForm/UsersForm'


const UsersFormPage = () => {
    const [ users, setUsers] = useState({});
    const {id} = useParams();
    const getData = async () => {
        const {data} = await getReq(`/users/${id}`);
        setUsers(data);
    };

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="container_news">
      <UsersForm
      users = {users} />
    </div>
  )
}

export default UsersFormPage