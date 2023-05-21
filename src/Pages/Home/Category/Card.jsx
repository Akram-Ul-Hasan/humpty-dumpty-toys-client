import React from "react";

const Card = ({ toy }) => {
  const { toyName, toyImage, price, rating } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={toyImage}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-start
        ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
