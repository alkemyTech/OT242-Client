import React from 'react';
import '../members_card/MemberCard.css'

const MemberCard = (props) => {
    const { id, name, image } = props;

    return (
      <>
    <div className="card" style={{backgroundImage: `url(${image})`}}>

        <div>
            <h4>{name}</h4>
            <h5>{name}</h5>
            <a href="#"></a>
        </div>
    </div>
      </>

    );
  }


export default MemberCard;