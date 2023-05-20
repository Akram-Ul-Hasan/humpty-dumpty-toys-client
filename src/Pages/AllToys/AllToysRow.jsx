import React from "react";

const AllToysRow = ({toy}) => {
    const { sellerName, toyName, toyImage, category, price, quantity} =toy;
  return (
    <tr>
      {/* <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th> */}
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