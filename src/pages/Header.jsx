import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white bg-[#3a506b] p-4 shadow-md">
      {/* Center Group */}
      <div className="flex items-center gap-8 mx-auto">
        <Link
          to="/home"
          className="text-white text-lg font-bold px-4 py-2 rounded-lg transition-colors duration-300 hover:text-orange-500"
        >
          Home
        </Link>
        <Link
          to="/settings"
          className="text-white text-lg font-bold px-4 py-2 rounded-lg transition-colors duration-300 hover:text-orange-500"
        >
          Settings
        </Link>
        <Link to="/notifications" title="Notifications">
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            className="cursor-pointer text-white transition-colors duration-300 hover:text-orange-500"
          />
        </Link>
      </div>

      {/* Right Group */}
      <div>
        <Link to="/user" title="User Profile">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 cursor-pointer">
            <img
              src="/images/profile pic.jpg" // Replace with the actual profile picture path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
