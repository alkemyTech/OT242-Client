import React from "react";
import "./ClickedMemberCard.css";

const ClickedMemberCard = (props) => {
  const { id, image } = props;

  return (
    <>
      <div
        className="clickedMemberCard"
        key={id}
        style={{
          backgroundImage: `url('images/Miembros_del_equipo/${image}')`,
        }}
      >
      </div>
    </>
  );
};

export default ClickedMemberCard;
