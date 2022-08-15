import { React, useEffect } from "react";
import MemberCard from "./../../../components/cards/members_card/MemberCard";
import '../aboutUsPage/AboutUs.css';
import Button from '../../../components/buttons/Button';
import Loader from "../../../components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { loadMembers } from "../../../app/slices/members";



const AboutUsPage = (props) => {

const { membersList } = useSelector(state => state.members)


const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadMembers());

}, [dispatch]);

  return (

    <div className="div_main">
      <h1>¡Nuestro Staff!</h1>

      <a href="/contact"><Button className="btn-AU" text='Quiero ser parte!' type="button"/></a>

      <div className="aboutcard_container" id="member_card_container">
   {(
          membersList.map((item) => (
            <MemberCard key={item.id} name={item.name} image={item.image} />
          ))
        )}
      </div>
    </div>
  );
};

export default AboutUsPage;
