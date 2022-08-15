import { React, useEffect } from "react";
import Card from "../../../components/cards/Card";
import "./HomePage.css";
import "../testimonialsPage/TestimonialsPage.css"
import Button from "../../../components/buttons/Button";
import MemberCard from "../../../components/cards/members_card/MemberCard";
import { loadMembers } from "../../../app/slices/members";
import { loadTestimonials } from "../../../app/slices/testimonials";
import { loadNews } from "../../../app/slices/news";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';



function HomePage() {

const { membersList } = useSelector(state => state.members)
const { testimonialList } = useSelector(state => state.testimonials)
const { newsList } = useSelector(state => state.news)

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadMembers());
  dispatch(loadTestimonials());
  dispatch(loadNews());
}, [dispatch]);



  return (
    <div className="main_container">
      <div className="welcome_container">
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
          <Link to='/contact'><Button text='Contactanos' className='button-primary' type='button' style={{width: '30%',}}/></Link>
          
        </div>
        <img
          src="./images/Home.png"
          alt="hands togethers"
          className="welcome_img"
        />
      </div>

      <div className="titles_container">
        <h2>Nuestro Staff</h2>
        <Link to="/aboutUs"><Button text='Ver todos...' className='button-secondary' /></Link>
        </div>
        <div className="card_container">
        {(
          membersList.map((item) => (
            <MemberCard key={item.id} name={item.name} image={item.image} />
          ))
        )}
        
        </div>

      
      <div className="titles_container">
      <h2>Testimonios</h2>
        <Link to="/testimonials"><Button text='Ver todos...' className='button-secondary' /></Link>
        </div>
        <div className="card_container">
      {/* {loading ? (
          <div>
          <Loader className='loader' size='small' colors={[]} children={<p>Cargando...</p>}/>
          </div>
      ) : (*/} {(

          testimonialList.map((item) => (
            <div className="testimonials-item"key={item.id}>
              <img src={item.image} alt={item.name}></img>
              <h2>{item.name}</h2>
              <h4>{item.content}</h4>
            </div>
          ))
          )} 
        </div>
        
      

      <div className="titles_container">
      <h2>Últimas novedades</h2>
        <Link to="/news"><Button text='Ver todas...' className='button-secondary' /></Link>
        </div>
        <div className="card_container">
          {newsList.map((item) => (
            <div className="news_cards" key={item.id}>
              <Card imageSource={item.image} title={item.name} text={item.content} />
            </div>
         ))}
          </div>
        
      </div>
  );
}
export default HomePage;
