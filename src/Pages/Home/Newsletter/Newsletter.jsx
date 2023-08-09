const Newsletter = () => {
  return (
    <div className="bg-rose-200 flex flex-col md:flex-row gap-5 px-5 justify-evenly py-20">
      <div>
        <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>
        <p>Be the first to know about new products, sales and promotions.</p>
      </div>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered"
          />
          <button className="btn btn-primary">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
