import React from "react";
import tes1 from '../../../../src/assets/testimoni/testimoni1.jpg';
import tes2 from '../../../../src/assets/testimoni/testimoni2.jpeg';
import tes3 from '../../../../src/assets/testimoni/testimoni3.jpeg';

const Testimonial = () => {
  return (
    <div className="text-center mt-20 bg-blue-200">
      <h1 className="text-5xl font-bold pt-10 ">Testimonial</h1>
      <p className="py-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
        rem sed. At alias tempora impedit doloremque dolorem dicta ipsa?
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-evenly pb-20 text-left">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              The quality of produts are awesome! I and my kids really love it!
              in hoc quidem pertinacem; Ergo infelix una…
            </p>
            <div className="flex ">
              <img className="w-16 h-16 border rounded-full" src={`${tes1}`} alt="" />
              <div>
                <h1>Hannah Wade</h1>
                <p>November 30, 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              The quality of produts are awesome! I and my kids really love it!
              in hoc quidem pertinacem; Ergo infelix una…
            </p>
            <div className="card-actions justify-start">
                <img className="w-16 h-16 border rounded-full" src={`${tes2}`} alt="" />
              <div>
                <h1>Hannah Wade</h1>
                <p>November 30, 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              The quality of produts are awesome! I and my kids really love it!
              in hoc quidem pertinacem; Ergo infelix una…
            </p>
            <div className="card-actions justify-start">
              <img className="w-16 h-16 border rounded-full" src={`${tes3}`} alt="" />
              <div>
                <h1>Hannah Wade</h1>
                <p>November 30, 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
