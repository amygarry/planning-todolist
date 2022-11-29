import './App.css';
import Header from './componenets/Header';
import Form from './componenets/Form';
import {useState} from 'react'

function App() {

  const [taskList, setTaskList] = useState([])

  console.log("Task List: ",taskList)

  const addTask =(newTask)=>{
    setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
     <Header/>
     <Form addTask={addTask}/>
    </div>
  );
}

export default App;
