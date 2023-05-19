import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import img from "../../assets/login1.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    const [error, setError] = useState("");
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="hero min-h-screen w-2/3">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-10">
          <div className="max-w-md text-center">
                <h1 className="mt-5 text-4xl font-bold">Wellcome Back!</h1>
                <p className="mt-5 text-2xl">
                  Please Login!!!
                </p>
                
              </div>
            {/* Login from */}
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label text-left">
                <p className="label-text-alt">
                  Don't have an Account?
                  <Link to="/login/register" className=" link link-hover">
                    
                    Register
                  </Link>
                </p>
              </label>
              
            </form>
            <p className="text-error ms-10 ">{error}</p>
            <div className="divider text-sm mx-10">or Login via</div> 
            <div className="mx-7 mb-7 flex flex-col gap-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-info"
              >
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline btn-info"
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Login;
