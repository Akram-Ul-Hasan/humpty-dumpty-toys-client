import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>

      <li>
        <Link to="/all-toys">All Toys</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="/my-toys">My Toys</Link>
          </li>
          <li>
            <Link to="/add-toy">Add a Toy</Link>
          </li>
          <li>
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            
              <img
                className="rounded-full w-8 h-8 tooltip tooltip-open tooltip-bottom"
                data-tip="hello"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </li>
          <li>
            <Link to="">
              <button onClick={handleLogOut}>Log out</button>
            </Link>
          </li>
          
        </>
      ) : (
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-10 w-20" src={logo} alt="" />
          <h2 className="text-3xl font-bold">Humpty Dumpty</h2>
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
