import React from 'react'
import { Carousel } from "react-bootstrap"
import './Slider.css'

/* Slider Component 
(add more objects in slidesData for more slides) */

export default function Slider() {

    // Objects Array
    const slidesData=[{    //First object / slide 
        imageUrl: 'https://logos.flamingtext.com/City-Logos/Ong-Logo.png',
        title: 'Misión',
        description: 'Trabajar articuladamente con los distintos aspectos de la vida de las familias.'
      },
      {     //Second object / slide
        imageUrl: 'https://blog.digitalegia.com/hubfs/dinamicas-para-impulsar-ONG-redes-sociales.png',
        title: 'Visión',
        description: 'Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava.'
      },
      {     //Third object / slide
        imageUrl: 'https://i.blogs.es/7cb90c/giving_week_2018-social-tm_1_copy_1.max-1000x1000/1366_2000.jpg',
        title: 'Nosotros',
        description: 'Desde 1997 vecinos del barrio La Cava.'
      }]
    
    return (
        <div> 
            <Carousel variant='dark'>

            {/* Rendering each slide with .map */}
                {slidesData.map((e) =>
                <Carousel.Item>
                    <img src={e.imageUrl}/>
                    <Carousel.Caption>
                        <h1 className='text'>{e.title}</h1>
                        <p className='text'>{e.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>)}

            </Carousel>
        </div>
    )
}
