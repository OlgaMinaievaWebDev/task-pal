import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const saveTasks = (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const generateId = () => Date.now().toString();

  const addTask = (text) => {
    if (!text || text.trim() === "") return;

    const newTask = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    saveTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);
  };

  const deleteAllTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      saveTasks([]);
    }
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  const editTask = (newText) => {
    if (!newText || newText.trim() === "") return;
    if (newText.length > 25) {
      alert("Task must be less than 25 characters");
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, text: newText.trim() } : task
    );

    saveTasks(updatedTasks);
    cancelEditing();
  };

 const completeTask = (id) => {
   const updatedTasks = tasks.map((task) => {
     if (task.id === id) {
       return { ...task, completed: !task.completed };
     }
     return task;
   });
   saveTasks(updatedTasks);
 };
 
  return (
    <TodoContext.Provider
      value={{
        tasks,
        editingTaskId,
        editingTaskText,
        addTask,
        removeTask,
        deleteAllTasks,
        startEditing,
        cancelEditing,
     editTask,
        completeTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
