import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReq } from '../../../helpers/ReqToApi'
import MembersForm from '../../../components/forms/membersForm/MembersForm'


const MembersFormPage = () => {
    const [ members, setMembers] = useState(null);
    const {id} = useParams();
    const getData = async () => {
        const {data} = await getReq(`/admin/members/${id}`);
        setMembers(data);
    };

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="container_news">
      <MembersForm
      members = {members} />
    </div>
  )
}

export default MembersFormPage