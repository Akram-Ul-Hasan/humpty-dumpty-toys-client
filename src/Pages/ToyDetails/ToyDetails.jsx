import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { _id, sellerName,sellerEmail, toyName, toyImage,description, price, quantity, rating } =toy;

  console.log(toy);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={toyImage}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>Seller Name: {sellerName}</p>
          <p>Seller Email: {sellerEmail}</p>
          <p>Description: {description}</p>
          <p>Available Quantity: {quantity}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating} </p>
         
          
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
