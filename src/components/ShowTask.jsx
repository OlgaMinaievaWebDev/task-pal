import { useContext } from "react";
import Button from "../ui/Button";
import Task from "./Task";
import TodoContext from "../context/TodoContext";

function ShowTask() {
  const { tasks, deleteAllTasks } = useContext(TodoContext);

  return (
    <section className="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 py-2 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Todo
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tasks.length === 0
              ? "No tasks available"
              : `${tasks.length} task${tasks.length > 1 ? "s" : ""} `}
          </span>
        </div>
        {tasks.length > 0 && (
          <Button onClick={deleteAllTasks}>Clear All</Button>
        )}
      </div>
      <ul className="space-y-4">
        <li>
          <Task />
        </li>
      </ul>
    </section>
  );
}

export default ShowTask;
