import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  //const [refresh, SetRefresh] = useState(true);
  
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log("toys:",toys);
      })
  }, []);

//   const handleDelete = (id) => {
//     const proceed = confirm("Are you sure you want ro delete");
//     if (proceed) {
//       fetch(`https://car-doctor-server-five-teal.vercel.app/bookings/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.deletedCount > 0) {
//             alert("Deleted successfully");
//             SetRefresh(!refresh);
//           }
//         });
//     }
//   };
//   const handleBookingConfirm = (id) => {
//     const proceed = confirm("Are you sure, You want to proceed?");
//     if (proceed) {
//       fetch(`https://car-doctor-server-five-teal.vercel.app/bookings/${id}`, {
//         method: "PATCH",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({ status: "confirm" }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.modifiedCount > 0) {
//             const remaining = bookings.filter((booking) => booking._id !== id);
//             const updated = bookings.find((booking) => booking._id === id);
//             updated.status = "confirm";
//             const newBooking = [updated, ...remaining];
//             setBookings(newBooking);
//           }
//         });
//     }
//   };
  return (
    <div className="mx-10">
      {/* <h2>Total Order: {bookings.length}</h2> */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Toy Photo
              </th>
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
                //handleDelete={handleDelete}
                //handleBookingConfirm={handleBookingConfirm}
              ></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
