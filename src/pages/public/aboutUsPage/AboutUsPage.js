import { React, useState, useEffect } from "react";
import MemberCard from "./../../../components/cards/members_card/MemberCard";
import { getReq } from "./../../../helpers/ReqToApi";
import '../aboutUsPage/AboutUs.css';
import Button from '../../../components/buttons/Button';

const AboutUsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const loadMembers = async () => {
      setLoading(true);
      //const response = await getReq(`/admin/members`);
      const response = [
        {
          id: 1,
          name: "Cecilia Mendez",
          image: "Cecilia Mendez.jpeg",
        },
        {
          id: 2,
          name: "Marco Fernandez",
          image: "Marco Fernandez.jpg",
        },
        {
          id: 3,
          name: "María Garcia",
          image: "María Garcia.jpg",
        },
        {
          id: 4,
          name: "María Irola",
          image: "María Irola.jpg",
        },
        {
          id: 5,
          name: "Marita Gomez",
          image: "Marita Gomez.jpeg",
        },
        {
          id: 6,
          name: "Mariam Rodriguez",
          image: "Miriam Rodriguez.jpg",
        },
        {
          id: 7,
          name: "Rodrigo Fuente",
          image: "Rodrigo Fuente.jpg",
        },
      ];
      setMembers(response);
      setLoading(false);
    };

    loadMembers();
  }, []);

  return (
    <div className="div_main">
      <h1>¡Nuestro Staff!</h1>

      <a href="/contact"><Button className="btn-AU" text='Quiero ser parte!' type="button"/></a>

      <div className="card_container">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          members.map((item) => (
            <MemberCard key={item.id} name={item.name} image={item.image} />
          ))
        )}
      </div>
    </div>
  );
};

export default AboutUsPage;
