function Button({ children, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-30  px-6 py-4 border-2 border-amber-500 rounded-md bg-amber-400 text-md hover:bg-amber-500 transition transform hover:scale-105 active:scale-95 dark:text-black"
    >
      {children}
    </button>
  );
}

export default Button
