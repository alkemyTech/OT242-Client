import React from 'react'
import { Carousel } from "react-bootstrap"
import '../carousel/Slider.css'

/* Slider Component 
(add more <Carrousel.Item> for more slides) */

export default function Slider(props) { 
    return (
        <div> 
            <Carousel variant='dark'>

                <Carousel.Item>
                    <img src={props.slide1[0]}/>
                    <Carousel.Caption>
                        <h1 className='text'>{props.slide1[1]}</h1>
                        <p className='text'>{props.slide1[2]}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={props.slide2[0]}/>
                    <Carousel.Caption>
                        <h1 className='text'>{props.slide2[1]}</h1>
                        <p className='text'>{props.slide2[2]}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={props.slide3[0]}/>
                    <Carousel.Caption>
                        <h1 className='text'>{props.slide3[1]}</h1>
                        <p className='text'>{props.slide3[2]}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}
