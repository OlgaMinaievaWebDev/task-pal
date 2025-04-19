import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
      <div className="min-h-screen w-full bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <AddTask />
        <ShowTask />
        </div>
        </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
