import { useState } from 'react';
import './App.scss';
//import ColorSquare from './Components/ColorSquare/colorSquare';
import ToDoList from './Components/toDoList/ToDoList';

function App() {
  const toDoList = [
    {
      id: 1,
      title: "Go Shopping"
    },
    {
      id: 2,
      title: "Go to supermarket"
    },
    {
      id: 3,
      title: "Cooking"
    },
    {
      id: 4,
      title: "Watching movies"
    },
  ]
  const [todolist, setTodolist] = useState(toDoList)
  
  function handleToDoList(item){
    //console.log("inonclick",item) // a given element of an array
    const newListToDo = [...todolist].filter(action => action.id !== item.id)
    setTodolist(newListToDo)
  }
  return ( 
    <div>
      <ToDoList todolist={todolist} onToDoClick={handleToDoList}/>
    </div>
     
    
  );
}

export default App;