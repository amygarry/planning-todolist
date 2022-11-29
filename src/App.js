import './App.css';
import Header from './componenets/Header';
import Form from './componenets/Form';
import {useState} from 'react'
import List from './componenets/List';

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
     <List tasks={taskList}/>
    </div>
  );
}

export default App;
