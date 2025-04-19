import logo from "../assets/logo.webp";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import useTheme from "../context/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 h-[72px] bg-gray-800 dark:bg-gray-900 text-white shadow-md">
      {/* Logo and Title Section */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={logo}
          alt="logo image"
          className="w-[60px] sm:w-[80px] h-[50px] sm:h-[70px] object-contain"
        />
        <h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
          TaskPal
        </h1>
      </div>

      {/* Theme Toggle Section */}
      <button
        className="flex items-center justify-center text-xl sm:text-2xl cursor-pointer rounded-full p-2 transition-transform duration-200 ease-in-out hover:scale-110"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <FaMoon className="hover:text-stone-100" />
        ) : (
          <FaSun className="text-amber-500 hover:text-amber-300" />
        )}
      </button>
    </header>
  );
}

export default Header;
