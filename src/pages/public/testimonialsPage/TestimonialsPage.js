import React, { useEffect, useState } from "react";
import { getReq } from "../../../helpers/ReqToApi";
import Button from "react-bootstrap/Button";
import "./TestimonialsPage.css";
import AnimatedPage from '../../../components/AnimatedPage';

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    getTestimonials();
  }, []);
  const getTestimonials = async () => {
    try {
      const res = await getReq("/testimonials");
      const data = await res.data;
      setTestimonials(data);
    } catch (err) {
      return <h1 className="activity-container">ERROR</h1>;
    }
  };

  return (
    <AnimatedPage>
        <div>
        <h1 className="testimonials-title">Testimonios</h1>
        <ul className="testimonials-container">
            {testimonials.map((item) => (
            <li className="testimonials-item"key={item.id}>
                <img src={"https://s3.sa-east-1.amazonaws.com/ot242-server/" + item.image}></img>
                <h2>{item.name}</h2>
                <h4>{item.content}</h4>
            </li>
            ))}
        </ul>
            <Button variant="danger" href="/backoffice/testimonialsform/" className="btn-add">
            <h2>¡Agregar mi testimonio!</h2>
            </Button><br></br>
            <Button variant="outline-dark" href="/" className="btn-back">
            <h2>Ir al inicio</h2>
            </Button>
        </div>
    </AnimatedPage>
  );
};

export default TestimonialsPage;
