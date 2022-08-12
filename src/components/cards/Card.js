import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card_cont">
      <div className="card_image_cont">
        <img src={imageSource} alt="SomosMas_Novedad" className="card_img"/>
      </div>
      <div className="card_text">
        <h4 className="card_title">{title}</h4>
        <p className="card_secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia,"+
             "voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="card_btn"
          rel="noopener noreferrer"
        >
          Ver {title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;