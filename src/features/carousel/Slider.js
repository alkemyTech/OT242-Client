import React from 'react'
import { Carousel } from "react-bootstrap"

export default function Slider() {
    return (
        <div>
            <Carousel variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://euskalnews.com/wp-content/uploads/2021/10/ong-agenda-2030.jpg"
                        alt="Misión"
                    />
                    <Carousel.Caption>
                        <h3>Misión</h3>
                        <p>Trabajar articuladamente con los distintos aspectos de la vida de las
                            familias.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.digitalegia.com/hubfs/dinamicas-para-impulsar-ONG-redes-sociales.png"
                        alt="Visión"
                    />

                    <Carousel.Caption>
                        <h3>Visión</h3>
                        <p>Mejorar la calidad de vida de niños y familias en situación de
                            vulnerabilidad en el barrio La Cava.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.blogs.es/7cb90c/giving_week_2018-social-tm_1_copy_1.max-1000x1000/1366_2000.jpg"
                        alt="Nosotros"
                    />

                    <Carousel.Caption>
                        <h3>Nosotros</h3>
                        <p>
                            Desde 1997 vecinos del barrio La Cava.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
