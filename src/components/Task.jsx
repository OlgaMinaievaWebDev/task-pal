import { Pencil, Trash } from "lucide-react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function Task() {
  const { tasks, removeTask } = useContext(TodoContext);

  return (
    <div className="space-y-4 mt-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center border-l-4 border-amber-500 bg-white dark:bg-zinc-800 rounded-md shadow-md px-6 py-4 w-full max-w-2xl mx-auto hover:shadow-lg transition"
        >
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {task.text}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {task.createdAt}
            </span>
          </div>
          <div className="flex gap-4">
            <Pencil className="text-amber-500 cursor-pointer hover:text-amber-600 transition" />
            <Trash className="text-red-500 cursor-pointer hover:text-red-600 transition" onClick={()=>removeTask(task.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task;
