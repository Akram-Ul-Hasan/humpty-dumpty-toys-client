import React from "react";
import { Link } from "react-router-dom";

const Card = ({ toy }) => {
  const { _id, toyName, toyImage, price, rating } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-40 h-40"
          src={toyImage}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-start
        ">
        <button className="btn btn-primary"><Link to={`/toys/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
