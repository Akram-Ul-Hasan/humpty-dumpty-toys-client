import img from '../../../assets/playtime.jpg'

const Playtime = () => {
  return (
    <div
      className="hero mt-20"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-left text-neutral-content flex flex-col md:flex-row gap-16 py-32">
        <div className="w-1/2">
          <h1 className="mb-5 text-5xl font-bold">Playtime with Toys</h1>
          <p className="mb-5">
          High-Quality and stylish fashion for boys and girls. A completely new experience and will turn an ordinary fashion into something exceptional.
          </p>
          <button className="btn btn-primary">Shop now</button>
        </div>
        <div className='border-l-4 p-10'>
            <h3 className='text-3xl font-bold'>Big Sale</h3>
            <h1 className='text-7xl'>Up to 50% Off</h1>
        </div>
      </div>
    </div>
  );
};

export default Playtime;
