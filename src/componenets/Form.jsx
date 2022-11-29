import React, {useState} from "react";

function Form (props){

    const [userInput, setUserInput] = useState("")

    const handleChange = (e)=> setUserInput(e.target.value)
    const onSubmit = (e)=>{
        e.preventDefault()
        props.addTask(userInput)
        console.log(userInput)
        setUserInput("")
    }

    return(
        <form onSubmit ={onSubmit}>
            <h1>Add a task</h1>
            <input type="text" onChange={handleChange} value={userInput}/>
            <button>Add Task</button>
        </form>
    )
}

export default Form