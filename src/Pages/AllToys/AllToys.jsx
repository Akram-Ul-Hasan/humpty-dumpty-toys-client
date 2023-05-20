import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log("toys:", toys);
      });
  }, []);

  const handleSearchToy = event =>{
    event.preventDefault();
    const form = event.target;
    const searchToy = form.searchToy.value;
    console.log(searchToy);
    fetch(`http://localhost:5000/toys?toyName=${searchToy}`)
    .then(res=> res.json())
    .then(data=> {
      setToys(data);
      console.log(data);
    })
    form.reset();
  }

 
  return (
    <div className="mx-10">
      <div className="form-control w-1/5 mx-auto mb-10">
        <form onSubmit={handleSearchToy} className="input-group">
          <input
            type="text"
            name='searchToy'
            placeholder="Search by toy name"
            className="input input-bordered "
          />
          <button className="btn btn-square">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Seller Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AllToysRow
                key={toy._id}
                toy={toy}
              ></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
