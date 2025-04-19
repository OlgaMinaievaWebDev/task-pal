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

 
 return (
   <TodoContext.Provider value={{tasks, setTasks: saveTasks, addTask, removeTask}}>
     {children}
   </TodoContext.Provider>
 );  
} 

export default TodoContext;