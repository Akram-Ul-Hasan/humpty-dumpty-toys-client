import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import img from "../../assets/register.jpg";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, setDisplayNamePhotoUrl, logOut } =
    useContext(AuthContext);

  const handleRegisterForm = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoUrl, email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one upper case  letter.");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please add at least one number.");
      return;
    } else if (password.length < 6) {
      setError("Password should be at least 6 character");
      return;
    }
    useTitle('Register');
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        event.target.reset();
        setSuccess("User has been created successfully!");
        setDisplayNamePhotoUrl(name, photoUrl)
          .then(() => {
            console.log(user.displayName, user.photoURL);
          })
          .catch((error) => {
            console.log(error.message);
          });
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="hero min-h-screen w-2/3">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* Register from */}
          <form onSubmit={handleRegisterForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <label className="label text-left">
              <p className="label-text-alt">
                Already have an Account?
                <Link to="/login" className="link link-hover">
                  {" "}
                  Login
                </Link>
              </p>
            </label>
          </form>
          <p className="text-error ms-10 mb-5">{error}</p>
          {success && (
            <div>
              <p className="text-success ms-10 mb-5">
                {success}
                <span>
                  <Link className="text-primary" to="/login">
                    sign in now
                  </Link>
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
