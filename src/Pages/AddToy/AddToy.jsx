import React from "react";
import img from "../../assets/add-toy.jpg";
const AddToy = () => {
  const handleNewToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyImage = form.toyImage.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value
    const newToy = {
      toyName,
      toyImage,
      sellerName,
      sellerEmail,
      category,
      quantity,
      price,
      rating,
      description
    };
    fetch('http://localhost:5000/toys',{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            
        })
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center  bg-white rounded-lg lg:w-2/3 my-20">
        <div className="w-4/5">
          <form onSubmit={handleNewToy} className="card-body">
            {/*Toy name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Image</span>
              </label>
              <input
                type="url"
                name="toyImage"
                placeholder="Toy image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                placeholder="Seller name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                placeholder="Seller email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Sub-category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
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
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
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

export default AddToy;
