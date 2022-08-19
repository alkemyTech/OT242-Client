import { React, useEffect, useState } from "react";
import MemberCard from "./../../../components/cards/membersCard/MemberCard";
import '../aboutUsPage/AboutUsPage.css';
import Button from '../../../components/buttons/Button';
import { useSelector, useDispatch } from "react-redux";
import { loadMembers } from "../../../app/slices/members";
import ClickedMemberCard from "../../../components/cards/membersCard/clickedMemberCard/ClickedMemberCard";
import AnimatedPage from '../../../components/AnimatedPage';
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const AboutUsPage = (props) => {
// dejamos de usar redux por que daba conflictos.
//const { membersList } = useSelector(state => state.members)

const [clickedMember, setClickedMember] = useState({});
const [members, setMembers] = useState([])
const navigate = useNavigate()

//const dispatch = useDispatch();
const URI = 'http://localhost:3000/admin/members'

useEffect(() => {
  
  axios.get(URI).then((response)=>{
    console.log(response.data) 
    setMembers(response.data)
    setClickedMember(response.data[0])
  })
  //dispatch(loadMembers());
}, [ URI ]);

  return (

    <AnimatedPage>
      <section className="aboutSection" >
        
        <h1 className="aboutTitle" id="main">¡Nuestro Staff!</h1>

        <div className="aboutContainer">
          {(
          <>
            <div className="clickedMemberContainer">
              <div className="clickedMemberAndBtn">
                  <h2 className="clickedMemberName">{clickedMember.name}</h2>
                  <h5>{clickedMember.role}</h5>
                  <p>{clickedMember.content}</p>
                  <Link to="/contact"><Button className="serParteBtn" text='Quiero ser parte!' type="button"/></Link>
              </div>
              <ClickedMemberCard className="clickedMemberCard" key={clickedMember.id} image={clickedMember.image} />
            </div>
            
            {( members.map(member => (
                  <>
                      <div className="memberCardContainer" onClick={() => setClickedMember(member)}>
                          <a href="#main"><MemberCard key={member.id} name={member.name} image={member.image} /></a>
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
