import { useState } from 'react';
import './App.scss';
//import ColorSquare from './Components/ColorSquare/colorSquare';
import ToDoList from './Components/toDoList/ToDoList';

function App() {
  const [toDoList, setToDoList] = useState([
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
  ])
  function handleClick(item){
    const cloneList = [...toDoList]
    const newList = cloneList.filter(each => each.id !== item.id)
    setToDoList(newList)
  }
  return ( 
    <div>
      <h1>To Do Application</h1>
      <ul>
        {toDoList.map((item, index) => {
              //console.log(item.id)
              return (
             <ToDoList key={item.id} item={item} onClick = {()=> handleClick(item)}/>)
            })
        }
      </ul>
    </div>
     
    
  );
}

export default App;