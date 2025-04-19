import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <AddTask />
        <ShowTask />
      </div>
    </ThemeProvider>
  );
}

export default App;
