import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";


export default function Slider(props) {
  const { slidesData } = props;


  return (
    <div>
      <Carousel variant="dark">
        {slidesData.map((e) => (
          <Carousel.Item>
            <div className="slide_container">
              <div
                className="img_container"
                style={{
                  backgroundImage: `url('images/Actividades/Foto ${e.imageUrl}.jpg')`,
                }}
              >
              </div>
              <div className="data_container">
                <h1 className="text">{e.title}</h1>
                <p className="text">{e.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
