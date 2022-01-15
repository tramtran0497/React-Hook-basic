import React, { useState } from 'react'
import "./toDoForm.scss"

function ToDoForm({onSubmit}) {
    const [value, setValue] = useState("")

    function handleSubmit(e){
        // prevent reloading browser
        e.preventDefault();
        console.log("Submit")
        if(!onSubmit) return
        const newItem = {
            title: value
        }
        onSubmit(newItem)
        // setting the value is empty after submitting
        setValue("")
    }
    
    function handleChange(e){
        setValue(e.target.value)
        //console.log("handleChange", e.target.value)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='to-do-form'>
            <input type = "text" placeholder='Add your work' value = {value} onChange={(e) => handleChange(e)}/> 
            <button>Add</button>
        </form>
    )
}

export default ToDoForm
