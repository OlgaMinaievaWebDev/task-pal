import logo from "../assets/logo.webp";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Header() {

 const { theme, toggleTheme } = useTheme()
 
  return (
    <header className="flex justify-between items-center h-[72px] px-4 bg-gray-800 dark:bg-gray-900 text-white shadow-md">
      {/* Logo and Title Section */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo image" className="w-[90px] h-[70px]" />
        <h1 className="text-2xl font-semibold ">TaskPal</h1>
      </div>

      {/* Theme Toggle Section */}
      <button className="text-2xl cursor-pointer" onClick={toggleTheme}>
        {theme === "light" ? (
          <FaMoon className="transition-transform transform hover:scale-110" />
        ) : (
          <FaSun className="transition-transform transform hover:scale-110" />
        )}
      </button>
    </header>
  );
}

export default Header;
