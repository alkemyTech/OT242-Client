import React from "react";
import "../members_card/MemberCard.css";

const MemberCard = (props) => {
  const { id, name, image } = props;

  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: `url('images/Miembros_del_equipo/${image}')`,
        }}
      >
        <div>
          <h5>{name}</h5>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
