import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import ThemeToggle from "./ThemeToggle";
// import ReactTooltip from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import "./navbar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white backdrop-blur-3xl text-black shadow-xl z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <iframe
            src="https://lottie.host/embed/93dda559-1fa8-4f79-ae62-437cd21e7f28/Cyimimw3DD.lottie"
            className="w-10 h-10"
            title="Logo Animation"
            style={{ pointerEvents: "none" }}
          ></iframe>
          <span className="text-2xl font-semibold text-gray-600">
            EquiSports
          </span>
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/home"
            className="text-lg font-medium hover:text-blue-400"
            data-tip="Home"
            data-for="home"
          >
            Home
          </Link>
          <Link
            to="/all-sports"
            className="text-lg font-medium hover:text-blue-400"
            data-tip="All Sports Equipment"
            data-for="allSports"
          >
            All Sports Equipment
          </Link>
          <Link
            to="/add-equipment"
            className="text-lg font-medium hover:text-blue-400"
            data-tip="Add New Equipment"
            data-for="addEquipment"
          >
            Add Equipment
          </Link>
          <Link
            to="/my-equipment"
            className="text-lg font-medium hover:text-blue-400"
            data-tip="View My Equipment"
            data-for="myEquipment"
          >
            My Equipment
          </Link>
        </div>

        {/* User Profile and Logout Section */}
        <div className="flex items-center gap-4">
          {user && user.email ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover hover:ring-4 hover:ring-blue-300"
                data-tip="Profile Picture"
                data-for="profilePic"
              />
              <p className="font-medium" data-tip={user.displayName || "User"} data-for="userName">
                {user.displayName || "User"}
              </p>
              <button
                onClick={logOut}
                className="btn btn-neutral rounded-badge px-4 py-2 text-sm md:text-base hover:bg-red-500 text-white"
                data-tip="Log Out"
                data-for="logOut"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-neutral rounded-badge px-4 py-2 text-sm md:text-base hover:bg-blue-500 text-white"
              data-tip="Login to your account"
              data-for="login"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black"
          data-tip="Toggle Mobile Menu"
          data-for="menuToggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4 space-y-4">
          <Link
            to="/home"
            className="block py-2 hover:underline"
            data-tip="Go to Home"
            data-for="mobileHome"
          >
            Home
          </Link>
          <Link
            to="/all-sports"
            className="block py-2 hover:underline"
            data-tip="View All Sports Equipment"
            data-for="mobileAllSports"
          >
            All Sports Equipment
          </Link>
          <Link
            to="/add-equipment"
            className="block py-2 hover:underline"
            data-tip="Add New Equipment"
            data-for="mobileAddEquipment"
          >
            Add Equipment
          </Link>
          <Link
            to="/my-equipment"
            className="block py-2 hover:underline"
            data-tip="View My Equipment"
            data-for="mobileMyEquipment"
          >
            My Equipment
          </Link>
          {user && user.email ? (
            <button
              onClick={logOut}
              className="block w-full text-left py-2 text-red-400 hover:text-red-600"
              data-tip="Log Out"
              data-for="mobileLogOut"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="block w-full text-left py-2 text-blue-400 hover:text-blue-600"
              data-tip="Login to your account"
              data-for="mobileLogin"
            >
              Login
            </Link>
          )}
        </div>
      )}

      
    </nav>
  );
};

export default NavBar;
