import React from 'react'
import { Carousel } from "react-bootstrap"
import '../carousel/Slider.css'

export default function Slider() {
    return (
        <div>
            <Carousel variant='dark'>
                <Carousel.Item>
                    <img
                        className=""
                        src="https://logos.flamingtext.com/City-Logos/Ong-Logo.png"
                        alt="Misión"
                    />
                    <Carousel.Caption>
                        <h1 className='text'>Misión</h1>
                        <p className='text'>Trabajar articuladamente con los distintos aspectos de la vida de las
                            familias.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src="https://blog.digitalegia.com/hubfs/dinamicas-para-impulsar-ONG-redes-sociales.png"
                        alt="Visión"
                    />

                    <Carousel.Caption>
                        <h1 className='text'>Visión</h1>
                        <p className='text'>Mejorar la calidad de vida de niños y familias en situación de
                            vulnerabilidad en el barrio La Cava.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src="https://i.blogs.es/7cb90c/giving_week_2018-social-tm_1_copy_1.max-1000x1000/1366_2000.jpg"
                        alt="Nosotros"
                    />

                    <Carousel.Caption>
                        <h1 className='text'>Nosotros</h1>
                        <p className='text'>
                            Desde 1997 vecinos del barrio La Cava.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
