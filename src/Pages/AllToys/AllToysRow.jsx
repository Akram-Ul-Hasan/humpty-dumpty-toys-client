import React from "react";

const AllToysRow = ({toy}) => {
    const { sellerName, toyName, toyImage, category, price, quantity} =toy;
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
        <button>View Details</button>
      </th>
    </tr>
  );
};

export default AllToysRow;
