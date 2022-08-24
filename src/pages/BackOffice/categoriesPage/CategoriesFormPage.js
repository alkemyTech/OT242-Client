import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReq } from '../../../helpers/ReqToApi'

import CategoriesForm from '../../../components/forms/CategoriesForm/CategoriesForm'


const CategoriesFormPage = () => {
    const [ categories, setCategories] = useState(null);
    const {id} = useParams();
    const getData = async () => {
        const {data} = await getReq(`/categories/${id}`);
        setCategories(data);
    };

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="container_news">
      <CategoriesForm
      categories = {categories} />
    </div>
  )
}

export default CategoriesFormPage