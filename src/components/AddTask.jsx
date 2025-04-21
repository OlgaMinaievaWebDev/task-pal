import { useContext, useEffect, useState } from "react";
import Button from "../ui/Button";
import TodoContext from "../context/TodoContext";

function AddTask() {
  const [localText, setLocalText] = useState("");
  const {
    addTask,
    editTask,
    editingTaskId,
    editingTaskText,
    startEditing,
    cancelEditing,
  } = useContext(TodoContext);

  useEffect(() => {
    setLocalText(editingTaskText || "");
  }, [editingTaskId, editingTaskText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = localText.trim();

    if (!text) return;
    if (text.length > 25) {
      alert("Task must be less than 25 characters");
      return;
    }

    if (editingTaskId) {
      editTask(text);
    } else {
      addTask(text);
      setLocalText("");
    }
  };

  return (
    <form
      className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4 max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <label htmlFor="task" hidden>
        Add Task
      </label>
      <input
        type="text"
        placeholder="Add Task"
        name="task"
        autoComplete="off"
        maxLength={25}
        value={localText}
        onChange={(e) => {
          setLocalText(e.target.value);
          if (editingTaskId) {
            startEditing(editingTaskId, e.target.value);
          }
        }}
        className="w-full sm:w-auto flex-1 border-amber-500 rounded-md p-4 border-2 focus:outline-none focus:ring-1 focus:ring-red-400 dark:text-white dark:bg-zinc-800"
      />

      <div className="flex gap-2">
        <Button type="submit">{editingTaskId ? "Save" : "Add"}</Button>
        {editingTaskId && (
          <Button
            type="button"
            onClick={() => {
              cancelEditing();
              setLocalText("");
            }}
            variant="secondary"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

export default AddTask;
