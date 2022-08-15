import { React, useEffect, useState } from "react";
import MemberCard from "./../../../components/cards/membersCard/MemberCard";
import '../aboutUsPage/AboutUs.css';
import Button from '../../../components/buttons/Button';
import { useSelector, useDispatch } from "react-redux";
import { loadMembers } from "../../../app/slices/members";
import ClickedMemberCard from "../../../components/cards/membersCard/clickedMemberCard/ClickedMemberCard";
import AnimatedPage from '../../../components/AnimatedPage';
import {Link} from 'react-router-dom';



const AboutUsPage = (props) => {

const { membersList } = useSelector(state => state.members)
const [clickedMember, setClickedMember] = useState({});

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadMembers());

}, [dispatch]);

  return (

    <AnimatedPage>
      <section className="aboutSection">
        <h1 className="aboutTitle">¡Nuestro Staff!</h1>

        <div className="aboutContainer">
          {(

          <>
            <div className="clickedMemberContainer">
              <div className="clickedMemberAndBtn">
                  <h5 className="clickedMemberName">{clickedMember.name}</h5>
                  <Link to="/contact"><Button className="serParteBtn" text='Quiero ser parte!' type="button"/></Link>
              </div>
              <ClickedMemberCard className="clickedMemberCard" key={clickedMember.id} image={clickedMember.image} />
            </div>
            
            {( membersList.map(member => (
                  <>
                      <div className="memberCardContainer" onClick={() => setClickedMember(member)}>
                          <MemberCard key={member.id} name={member.name} image={member.image} />
                      </div>
                  </>
            )))}
            
          </>
          )}
        </div>
      </section>
    </AnimatedPage>

  );
};

export default AboutUsPage;
