import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { logOut, userDetails, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Logged Out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="text-lg rounded-xl text-white hover:text-white hover:bg-black">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg rounded-xl text-white  hover:text-white">
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li className="text-lg rounded-xl text-white">
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li className="text-lg rounded-xl text-white">
        <NavLink to="/checkout"></NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-red-700">
        <div className="navbar-start">
          <div className="dropdown">
            {/* hamburger menu for small device */}
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>{navLinks}</li>
            </ul>
          </div>

          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={userDetails.photoURL}
                alt={userDetails.displayName}
                className="w-10 rounded"
              />

              <span>{userDetails.displayName}</span>
              <button
                className="btn btn-ghost text-white hover:bg-red-600"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost text-white hover:text-white hover:bg-black">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn text-white btn-ghost hover:bg-black hover:text-white">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
