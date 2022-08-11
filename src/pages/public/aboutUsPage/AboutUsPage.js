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
      const response = await getReq(`/members`);
      
      setMembers(response.data);
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
