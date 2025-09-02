import { useState } from "react";
import { Link } from "react-router-dom";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100 shadow-md px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <AcademicCapIcon className="h-8 w-8 text-blue-300 cursor-pointer" />
          <Link to="/" className="text-2xl font-bold cursor-pointer hover:text-blue-600 transition">
            EduSphere
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/" className="hover:text-blue-600 font-medium cursor-pointer transition">Home</Link>
         <a href="#about" className="hover:text-blue-600 font-medium cursor-pointer transition">About</a>
<a href="#programs" className="hover:text-blue-600 font-medium cursor-pointer transition">Programs</a>
<a href="#admission" className="hover:text-blue-600 font-medium cursor-pointer transition">Admissions</a>
<a href="#contact" className="hover:text-blue-600 font-medium cursor-pointer transition">Contact</a>
        </div>

        {/* Login Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="btn btn-ghost cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex justify-between items-center border-b">
          <span className="text-xl font-bold cursor-pointer hover:text-blue-600 transition">EduSphere</span>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-600 transition">✖</button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          <Link to="/" className="hover:text-blue-600 font-medium cursor-pointer transition">Home</Link>
            <a href="#about" className="hover:text-blue-600 font-medium cursor-pointer transition">About</a>
<a href="#programs" className="hover:text-blue-600 font-medium cursor-pointer transition">Programs</a>
<a href="#admission" className="hover:text-blue-600 font-medium cursor-pointer transition">Admissions</a>
<a href="#contact" className="hover:text-blue-600 font-medium cursor-pointer transition">Contact</a>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
