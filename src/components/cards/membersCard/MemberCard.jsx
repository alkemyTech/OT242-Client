import React from "react";
import "./MemberCard.css";

const MemberCard = (props) => {
  const { id, name, image, role } = props;

  return (
    <>
      <div
        key={id}
        className="memberCard"
        style={{
          backgroundImage: `url('https://s3.sa-east-1.amazonaws.com/ot242-server/${image}')`,
        }}
      >
        <div className="memberCardInfo">
          <h5 className="memberCardName">{name}</h5>
          <p className="memberCarRole">{role}</p>
        </div>
      </div>
    </>

  );
};

export default MemberCard;
