import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({toy}) => {
    const { _id,sellerName, toyName, toyImage, category, price, quantity} =toy;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-20 h-20">
            {toyImage && <img className="" src={toyImage} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{sellerName}</td>
      <td>{quantity}</td>
      <td>${price}</td>

      <th>
        <button><Link to={`/toys/${_id}`}>View Details</Link></button>
      </th>
    </tr>
  );
};

export default AllToysRow;
