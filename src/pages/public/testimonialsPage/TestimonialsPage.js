import React, { useEffect, useState } from "react";
import { getReq } from "../../../helpers/ReqToApi";
import Button from "react-bootstrap/Button";
import "./TestimonialsPage.css";
import AnimatedPage from "../../../components/AnimatedPage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const TestimonialsPage = () => {
  const navigate = useNavigate()
  const notLoggedAlert = ()=>{
    Swal.fire({
      title: '¡Debes iniciar sesión primero!',
      showCancelButton: true,
      cancelButtonText: 'Más tarde',
      confirmButtonText: 'Iniciar Sesión',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const [testimonials, setTestimonials] = useState([]);
  let token = localStorage.getItem("token");

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
            <li className="testimonials-item" key={item.id}>
              <img
                src={
                  "https://s3.sa-east-1.amazonaws.com/ot242-server/" +
                  item.image
                }
              ></img>
              <h2>{item.name}</h2>
              <h4>{item.content}</h4>
            </li>
          ))}
        </ul>
        {token ? (
          <Button
            variant="danger"
            href="/backoffice/testimonialsform/"
            className="btn-add"
          >
            <h2>¡Agregar mi testimonio!</h2>
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={()=>notLoggedAlert()}
            className="btn-add"
          >
            <h2>¡Agregar mi testimonio!</h2>
          </Button>
        )}
        <br></br>
        <Button variant="outline-dark" href="/" className="btn-back">
          <h2>Ir al inicio</h2>
        </Button>
      </div>
    </AnimatedPage>
  );
};

export default TestimonialsPage;
