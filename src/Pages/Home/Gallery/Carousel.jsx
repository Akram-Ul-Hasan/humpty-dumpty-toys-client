import React from "react";

const Carousel = ({ img, id }) => {
  const Id = parseInt(id);
  return (
    <div id={`slide${Id}`} className="carousel-item relative w-full">
      <img src={img} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${Id === 1 ? 6 : Id - 1}`} className="btn btn-circle bg-slate-200 hover:bg-orange-400 text-black">
          ❮
        </a>
        <a href={`#slide${(Id % 6) + 1}`} className="btn btn-circle bg-slate-200 hover:bg-orange-400 text-black">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Carousel;
