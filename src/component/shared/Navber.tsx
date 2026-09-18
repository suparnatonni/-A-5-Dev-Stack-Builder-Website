import { useState } from "react";
import Logo from "../../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          <button  onClick={() => setMenuOpen(!menuOpen)}  className="md:hidden text-2xl text-gray-700" >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <img
            src={Logo}
            alt="Dev Stack"
            className="h-10 w-auto"
          />

          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <a  href="#"  className="text-pink-600" >
                Home
              </a>
            </li>

            <li>
              <a  href="#" className="text-gray-600 hover:text-pink-600">
                Technologies
              </a>
            </li>

            <li>
              <a  href="#"  className="text-gray-600 hover:text-pink-600">
                Projects
              </a>
            </li>

            <li>
              <a  href="#"  className="text-gray-600 hover:text-pink-600">
                About
              </a>
            </li>

            <li>
              <a  href="#"  className="text-gray-600 hover:text-pink-600">
                Contact
              </a>
            </li>
          </ul>

      
          <div className="flex items-center gap-3 md:gap-5">

            <button className="text-gray-700 text-sm font-medium">
              Sign In
            </button>

            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 md:px-5 py-2.5 rounded-full text-sm font-medium">
              Sign Up
            </button>

          </div>

        </div>

    
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">

            <ul className="flex flex-col gap-4">

              <li>
                <a
                  href="#"
                  className="block text-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Technologies
                </a>
              </li>

              <li>
                <a  href="#"className="block text-gray-600 hover:text-pink-600"  onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a  href="#"  className="block text-gray-600 hover:text-pink-600"  onClick={() => setMenuOpen(false)}   >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"  className="block text-gray-600 hover:text-pink-600"  onClick={() => setMenuOpen(false)} >
                  Contact
                </a>
              </li>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navber;