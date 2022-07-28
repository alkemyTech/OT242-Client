import React from 'react';
import Title from '../components/Title.js';
import Card from '../components/Card';
import './UIHome.css';

// Replace this with information from database
const cards = [
    {
      id: 1,
      title: "title 1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFdyltSOu_cC5diaLrkT9m6WelYvNDcBxdQ&usqp=CAU",
      url: "",
      text: "",
    },
    {
      id: 2,
      title: "Title 2",
      image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkG8r9JdYzyM2RWK1XmiVXyywTxfARclNiQ&usqp=CAU",
      url: "",
      text: "",
    },
    {
      id: 3,
      title: "title 3",
      image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmQ38q7wpDJbVB6OKN70AhVDyvisE0XKysw&usqp=CAU",
      url: "",
      text: "",
    },
    {
        id: 4,
        title: "title 4",
        image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmQ38q7wpDJbVB6OKN70AhVDyvisE0XKysw&usqp=CAU",
        url: "",
        text: "",
      },
  ];
  
  const txt = 'Hola! Bienvenidx';
////////////////////////////////


function Home(
){
    return(
    <div >
        <div>
            <Title text={txt} />
        </div>
        <div className='Container'>
            <img
                src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
                alt=" Slider placeholder" />
        </div>
        <div className="container d-flex justify-content-center align-items-center h-100 Container">
            <div className="row">
                {cards.map(({ title, image, url, id, text }) => (
                    <div className="col-md-3 cards" key={id}>
                        <Card imageSource={image} title={title} url={url} text= {text} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    
    );
}
export default Home;