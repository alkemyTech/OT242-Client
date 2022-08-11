// react
import { React, useState, useEffect } from "react";

// files and components
import MemberCard from "../../../components/cards/membersCard/MemberCard";
import ClickedMemberCard from "../../../components/cards/membersCard/clickedMemberCard/ClickedMemberCard";
import { getReq } from "./../../../helpers/ReqToApi";
import '../aboutUsPage/AboutUsPage.css';
import Button from '../../../components/buttons/Button';

// Dependencies
import { Link } from 'react-router-dom';

const AboutUsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [clickedMember, setClickedMember] = useState({});

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
      setClickedMember(response[0]);
      setLoading(false);
    };

    loadMembers();
  }, []);

  return (
    <section className="aboutSection">
      <h1 className="aboutTitle">¡Nuestro Staff!</h1>


      <div className="aboutContainer">
        {loading ? (
          <p>Cargando...</p>
        ) : (

        <>
          <div className="clickedMemberContainer">
            <div className="clickedMemberAndBtn">
                <h5 className="clickedMemberName">{clickedMember.name}</h5>
                <Link to="/contact"><Button className="serParteBtn" text='Quiero ser parte!' type="button"/></Link>
            </div>
            <ClickedMemberCard className="clickedMemberCard" key={clickedMember.id} image={clickedMember.image} />
          </div>

          
          {members.map(member => (
                <>
                    <div className="memberCardContainer" onClick={() => setClickedMember(member)}>
                        <MemberCard key={member.id} name={member.name} image={member.image} />
                    </div>
                </>
          ))}
          
        </>
        )}
      </div>
    </section>
  );
};

export default AboutUsPage;
