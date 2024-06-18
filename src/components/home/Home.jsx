import { useContext, useState } from 'react';
import './home.css';
import AppContext from '../../context';

const Home = () => {

  const [task, setTask] = useState({value: "", id: -1});
  const {dispacher} = useContext(AppContext);

  function submit(e){
       e.preventDefault();
       let newTask = {...task};
       newTask.id = Date.now().toString();
       dispacher("add", newTask);
       setTask({...task, value: ""});
  }


  function inputChange(e){
      setTask({...task, value: e.target.value});
  }

  return (
    <div className='home'>
      <form onSubmit={e => submit(e)}>
        <input type="text" placeholder='task' className="form-control mb-3" value={task.value} onChange={e => inputChange(e)}/>
        <button className="btn btn-success">Add Task</button>
      </form>
    </div>
  );
}

export default Home;
