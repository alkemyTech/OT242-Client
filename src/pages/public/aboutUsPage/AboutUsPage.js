// react
import { React, useState, useEffect } from "react";

// files and components
import MemberCard from "../../../components/cards/membersCard/MemberCard";
import ClickedMemberCard from "../../../components/cards/membersCard/clickedMemberCard/ClickedMemberCard";
import { getReq } from "./../../../helpers/ReqToApi";
import '../aboutUsPage/AboutUsPage.css';
import Button from '../../../components/buttons/Button';
import AnimatedPage from '../../../components/AnimatedPage'

// Dependencies
import { Link } from 'react-router-dom';

const AboutUsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [clickedMember, setClickedMember] = useState({});

  useEffect(() => {
    const loadMembers = async () => {
      setLoading(true);
      const response = await getReq(`/members`);
      setClickedMember(response.data[0]);
      setMembers(response.data);
      setLoading(false);
    };

    loadMembers();
  }, []);

  return (
    <AnimatedPage>
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
    </AnimatedPage>
  );
};

export default AboutUsPage;
