import Button from "../ui/Button";

function AddTask() {
  return (
    <form className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4 max-w-2xl mx-auto">
      <label htmlFor="task" hidden>
        Add Task
      </label>
      <input
        type="text"
        placeholder="Add Task"
        name="task"
        autoComplete="off"
        maxLength={25}
        className="w-full sm:w-auto flex-1 border-amber-500 rounded-md p-4 border-2 focus:outline-none focus:ring-1 focus:ring-red-400 dark:text-white dark:bg-zinc-800"
      />
    <Button>Add</Button>
    </form>
  );
}

export default AddTask;
