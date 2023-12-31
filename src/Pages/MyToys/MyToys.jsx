import React, { useContext, useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle('My Toys');
  const [toys, setToys] = useState([]);
  const [refresh, SetRefresh] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://humpty-dumpty-toys-server.vercel.app/toys?sellerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log("toys:", toys);
        console.log(data);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want ro delete");
    if (proceed) {
    fetch(`https://humpty-dumpty-toys-server.vercel.app/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
          SetRefresh(!refresh);
        }
      });
    }
  };

  return (
    <div className="mx-10">
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
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
