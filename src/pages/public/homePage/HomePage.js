import React from "react";
import Card from "../../../components/cards/Card";
import "./HomePage.css";
import Button from "../../../components/buttons/Button";

// Replace this with information from database
const cards = [
  {
    id: 1,
    title: "Novedad 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFdyltSOu_cC5diaLrkT9m6WelYvNDcBxdQ&usqp=CAU",
    url: "",
    text: "",
  },
  {
    id: 2,
    title: "Novedad 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkG8r9JdYzyM2RWK1XmiVXyywTxfARclNiQ&usqp=CAU",
    url: "",
    text: "",
  },
];

////////////////////////////////

function HomePage() {
  return (
    <div className="main_container">
      <div className="sub_container">
        <div className="welcome_text">
          <h1>Hola! Bienvenidx</h1>
          <p>
            Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y
            papás, abuelos y vecinos del barrio La Cava generando procesos de
            crecimiento y de inserción social. Uniendo las manos de todas las
            familias, las que viven en el barrio y las que viven fuera de él, es
            que podemos pensar, crear y garantizar estos procesos. Somos una
            asociación civil sin ﬁnes de lucro que se creó en 1997 con la
            intención de dar alimento a las familias del barrio. Con el tiempo
            fuimos involucrándonos con la comunidad y agrandando y mejorando
            nuestra capacidad de trabajo. Hoy somos un centro comunitario que
            acompaña a más de 700 personas a través de las áreas de: Educación,
            deportes, primera infancia, salud, alimentación y trabajo social.
          </p>
          <Button text='Contactanos' className='button-primary' type='button' style={{width: '30%',}}/>
        </div>
        <img
          src="./images/Home.png"
          alt="hands togethers"
          className="welcome_img"
        />
      </div>
      <div className="titles_container">
        <h2>Nuestro Staff</h2>
        <a href="/aboutUs">Ver todos...</a>
        </div>
        <div className="card_container"></div>

      
      <div className="titles_container">
      <h2>Testimonios</h2>
        <a href="/testimonials">Ver todos...</a>
        </div>
        <div className="card_container"></div>
        
      

      <div className="titles_container">
      <h2>Últimas novedades</h2>
        <a href="/news">Ver todos...</a>
        </div>
        <div className="card_container">
          {cards.map(({ title, image, url, id, text }) => (
            <div className="news_cards" key={id}>
              <Card imageSource={image} title={title} url={url} text={text} />
            </div>
          ))}
          </div>
        
      </div>
  );
}
export default HomePage;
