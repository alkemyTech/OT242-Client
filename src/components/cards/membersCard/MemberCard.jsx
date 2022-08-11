import React from "react";
import "./MemberCard.css";

const MemberCard = (props) => {
  const { id, name, image } = props;

  return (
    <>
      <div
        key={id}
        className="memberCard"
        style={{
          backgroundImage: `url('images/Miembros_del_equipo/${image}')`,
        }}
      >
        <div className="memberCardInfo">
          <h5 className="memberCardName">{name}</h5>
        </div>
      </div>
    </>

  );
};

export default MemberCard;
