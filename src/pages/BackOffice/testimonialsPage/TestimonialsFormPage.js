import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReq } from '../../../helpers/ReqToApi'

import TestimonialsForm from '../../../components/forms/TestimonialsForm/TestimonialsForm'


const TestimonialsFormPage = () => {
    const [ testimonials, setTestimonials] = useState(null);
    const {id} = useParams();
    const getData = async () => {
        const {data} = await getReq(`/testimonials/${id}`);
        setTestimonials(data);
    };

    useEffect(() => {
        getData();
    }, [])



  return (
    <div className="container_news">
      <TestimonialsForm
      testimonials = {testimonials} />
    </div>
  )
}

export default TestimonialsFormPage