import React from 'react'

function ToDoList({todolist, onToDoClick}) {
    console.log(todolist) // an array
   
    function onListClick(item){
       //console.log("infunc",item) // each element in an array
        onToDoClick(item)
    }
    return (
    <div>
        <h1>To Do Application</h1>
        <ul>
            {todolist.map(item => <li key={item.id} onClick={()=> onListClick(item)}>{item.title}</li>)}
        </ul>
    </div>
      
    )
}

export default ToDoList
