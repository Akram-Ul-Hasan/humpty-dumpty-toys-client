import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import headerImg from "../../../assets/header.jpg";
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <div data-aos="fade-up" className="mb-20 ">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h3 data-aos="fade-left" className="mb-5 text-3xl font-bold">
              Hello there
            </h3>
            <h1 data-aos="fade-right"  className="mb-5 text-5xl font-bold">
              Welcome to Humpty Dumpty Toy
            </h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
