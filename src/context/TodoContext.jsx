import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
 
 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('tasks')
   return savedTasks ? JSON.parse(savedTasks):[];
 });

const saveTasks = (newTasks) => {
 localStorage.setItem('tasks', JSON.stringify(newTasks));
 setTasks(newTasks);
}
 
 const addTask = (text) => {
  if (!text || text.trim() === "") return;
  
  const newTask = {
   id: Date.now().toLocaleString(),
   text: text.trim().toLocaleLowerCase(),
   completed: false,
   createdAt: new Date().toLocaleString(),
  }
  saveTasks([...tasks, newTask]);

 }

 const removeTask = (id) => {
  const newTasks = tasks.filter(task => task.id !== id)
  saveTasks(newTasks);
 }

 const deleteAllTasks = () => {
  if(window.confirm("Are you sure you want to delete all tasks?")) {
   saveTasks([]);
  }
 }

 
 return (
   <TodoContext.Provider value={{tasks, setTasks: saveTasks, addTask, removeTask, deleteAllTasks}}>
     {children}
   </TodoContext.Provider>
 );  
} 

export default TodoContext;