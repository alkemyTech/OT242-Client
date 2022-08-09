import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
<<<<<<< HEAD:src/pages/NewsPage/NewsFormPage.js
import {getReq} from '../../helpers/ReqToApi'
import Form from '../../components/NewsForm/NewsForm'
=======
import { getReq } from '../../../helpers/ReqToApi'

import Form from '../../../components/forms/NewsForm/NewsForm'
>>>>>>> main:src/pages/BackOffice/newsPage/NewsFormPage.js

const NewsFormPage = () => {
    const [ newsDetail, setNewsDetail] = useState([])
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