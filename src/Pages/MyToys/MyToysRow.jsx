import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete}) => {

  const { _id, sellerName, toyName, toyImage, category, price, quantity } = toy;
  return (
    
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-20 h-20">
            {toyImage && (
              <img
                className=""
                src={toyImage}
                alt="Avatar Tailwind CSS Component"
              />
            )}
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{sellerName}</td>
      <td>{quantity}</td>
      <td>${price}</td>

      <th>
        <div className="flex flex-col gap-4">
          <button className="btn btn-sm btn-success btn-outline"><Link to={`/update-toy/${_id}`}>
            Update
            </Link></button>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-error btn-outline"
          >
            Delete
          </button>
        </div>
      </th>
    </tr>
    
  );
};

export default MyToysRow;
