import { useState } from 'react';
import './App.scss';
import ToDoForm from './Components/toDoForm/ToDoForm';
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

  function handleToDoForm(newItem){
    //console.log("App",newItem)
    // setting the new one as each element existed in an array
    const newToDo = {
      // simple way to create new id, but it is not a good idea. It will be met error when we delete default value
      id: todolist.length + 1,
      ...newItem
    }
    //clone from todolist array
    const newList = [...todolist]
    newList.push(newToDo)
    setTodolist(newList)
  }
  return ( 
    <div>
      <ToDoForm onSubmit={handleToDoForm}/>
      <ToDoList todolist={todolist} onToDoClick={handleToDoList}/>
    </div>
     
    
  );
}

export default App;