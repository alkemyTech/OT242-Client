import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReq } from '../../../helpers/ReqToApi'

import Form from '../../../components/forms/NewsForm/NewsForm'


const NewsFormPage = () => {
    const [ newsDetail, setNewsDetail] = useState(null);
    const {id} = useParams();

    const getData = async () => {
        const {data} = await getReq('/admin/news/' + id);
        setNewsDetail(data);
    };

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="container_news">
      <Form
      newsDetail = {newsDetail} />
    </div>
  )
}

export default NewsFormPage
