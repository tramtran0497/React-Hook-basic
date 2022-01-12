import React from 'react'

function ToDoList(props) {
    const {item, onClick} = props;
    //console.log("key", item.id, item.title)
    return (
        <li onClick={() => onClick(item)}>
            {item.title}
        </li>
    )
}

export default ToDoList
