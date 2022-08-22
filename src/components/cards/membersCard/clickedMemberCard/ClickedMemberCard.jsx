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
          backgroundImage: `url('https://s3.sa-east-1.amazonaws.com/ot242-server/${image}')`,
        }}
      >
      </div>
    </>
  );
};

export default ClickedMemberCard;
