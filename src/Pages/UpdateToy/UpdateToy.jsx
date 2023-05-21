import React from 'react';
import img from "../../assets/add-toy.jpg";
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateToy = () => {  
    const toy = useLoaderData();
    console.log(toy._id);
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const updatedToy = {
          quantity,
          price,
          description,
        };
        console.log(updatedToy)
        fetch(`https://humpty-dumpty-toys-server.vercel.app/toys/${toy._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedToy),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          
          });
      };

    return (
        <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center  bg-white rounded-lg lg:w-2/3 my-20">
        <div className="w-4/5">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="$Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
          <label className="label text-left"></label>
        </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateToy;