import { React, useContext } from "react";
import MemberCard from "./../../../components/cards/members_card/MemberCard";
import '../aboutUsPage/AboutUs.css';
import Button from '../../../components/buttons/Button';
import Loader from "../../../components/Loader/Loader";
import { MembersContext } from "../../../context/MembersContext";


const AboutUsPage = (props) => {
  const { members, loading } = useContext(MembersContext);

  return (

    <div className="div_main">
      <h1>¡Nuestro Staff!</h1>

      <a href="/contact"><Button className="btn-AU" text='Quiero ser parte!' type="button"/></a>

      <div className="aboutcard_container" id="member_card_container">
        {loading ? (
          <div>
          <Loader className='loader' size='small' colors={[]} children={<p>Cargando...</p>}/>

          </div>
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
