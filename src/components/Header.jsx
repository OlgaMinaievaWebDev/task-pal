import logo from "../assets/logo.webp";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center h-[72px] px-4 bg-gray-800 dark:bg-gray-900 text-white shadow-md">
      {/* Logo and Title Section */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo image" className="w-[90px] h-[70px]" />
        <h1 className="text-2xl font-semibold ">TaskPal</h1>
      </div>

      {/* Theme Toggle Section */}
      <div className="flex items-center gap-6 text-2xl ml-auto cursor-pointer">
        <FaSun className="transition-transform transform hover:scale-110" />
        <FaMoon className="transition-transform transform hover:scale-110" />
      </div>
    </header>
  );
}

export default Header;
