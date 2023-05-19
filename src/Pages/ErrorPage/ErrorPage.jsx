import React from 'react';
import img from '../../assets/error404.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-10 text-7xl font-bold text-white">Ooops!!!!</h1>
          <button className="btn btn-primary rounded-full"><Link to="/">Go to Home Page</Link></button>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;