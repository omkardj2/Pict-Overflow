import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { UserData } from "../Context/UserContext";
import assests from "../assets/assests";
import { MdPerson } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isAuth, logoutHandler, fetchUser } = UserData();

  useEffect(() => {
    fetchUser();
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logoutHandler();
    setIsOpen(false);
  };

  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Sell Pet", link: "/sell-pet" },
    { id: 3, name: "Buy Pet", link: "/buy-pet" },
    { id: 4, name: "Pet Care", link: "/care" },
    { id: 5, name: "Contacts", link: "/contact" },
  ];

  return (
    <div className={`shadow-md bg-white duration-200 sticky top-0 z-50 ${scrolled ? 'py-0' : 'py-0'}`}>
      {/* Top Bar with Logo and Auth Buttons */}
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl flex items-center gap-3 text-white">
            <img
              src={assests.logo_img}
              alt="Logo"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            PetConnect
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {isAuth ? (
              <>
                <button
                  onClick={() => navigate("/profile")}
                  className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white p-2 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 border-2 border-white"
                >
                  <MdPerson size={20} />
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 border-2 border-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 border-2 border-white"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 border-2 border-white"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex justify-center bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 py-3">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="text-gray-700 font-medium px-3 py-1 hover:text-cyan-500 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b border-gray-100"
            >
              {item.name}
            </Link>
          ))}
          
          {isAuth ? (
            <>
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b border-gray-100 flex items-center gap-2"
              >
                <MdPerson size={18} />
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-6 py-3 text-left text-red-500 hover:bg-red-50 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/login");
                }}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-100 font-medium border-b border-gray-100"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/signup");
                }}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-100 font-medium"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;