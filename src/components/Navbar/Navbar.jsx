import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <nav className="flex space-x-4 font-semibold items-center text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </nav>
    </>
  );

  return (
    <div className="navbar bg-[#7E90FE] bg-opacity-5 lg:px-10 py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <a className="text-lg font-bold text-[#9873FF] lg:text-4xl">
            CareerHUB
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="py-2 px-3 rounded-lg font-semibold  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#d5c8ff] border border-[#9873FF] uppercase shadow-md shadow-[#9873FF] hover:bg-none cursor-not-allowed">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
