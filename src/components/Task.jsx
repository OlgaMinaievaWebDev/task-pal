import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

function Task() {
  return (
    <div className="flex justify-between items-center border-l-4 border-amber-500 bg-white dark:bg-zinc-800 rounded-md shadow-md px-6 py-4 w-full max-w-2xl mx-auto hover:shadow-lg transition">
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold text-gray-800 dark:text-white">
          Task A
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          12:00 PM
        </span>
      </div>
      <div className="flex gap-4">
        <Pencil className="text-amber-500 cursor-pointer hover:text-amber-600 transition" />
        <Trash className="text-red-500 cursor-pointer hover:text-red-600 transition" />
      </div>
    </div>
  );
}

export default Task;
