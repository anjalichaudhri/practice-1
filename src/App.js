import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = (event) => {
    // spread operator to add something in an array
    // setTodoList([...todoList, newTask]);

    // to add an identifier to better deal with delete operation
    // for that make todoList an array of operations
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    // filter function to delete something from an array
    // const newTodoList = todoList.filter((task) =>{
    //   // if(task === taskName){
    //   //   return false;
    //   // }
    //   //  return true;
    //   return task !== taskName;
    // })
    // setTodoList(newTodoList);
    //..set a sort of identifier to differentiate between items - common identifier i.e. id
    // for each element in the list
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTasks">
        {/* /**when have function without parameters call the function without function call 
        parenthesis, but with parameters function call should be like anonymous function () =>  deleteTask() */}
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Tasks</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <>
              <li>{task.taskName}</li>
              <li>{task.id}</li>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
