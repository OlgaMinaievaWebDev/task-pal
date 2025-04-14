import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <p className="text-lg p-4">
          Welcome to TaskPal! Your personal task manager.
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
