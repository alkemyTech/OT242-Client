import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark">
      <div className="overflow">
        <img src={imageSource} alt="SomosMas_Novedad" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia,"+
             "voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0 bg-primary text-white"
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