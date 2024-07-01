import { useContext, useState } from 'react';
import './home.css';
import AppContext from '../../context';
import { useDispatch } from 'react-redux';
import { add } from '../../store/reducers/todo-store';

const Home = () => {

  const [task, setTask] = useState({value: "", id: -1});
  const dispatch = useDispatch();

  function submit(e){
       e.preventDefault();
       let newTask = {...task};
       newTask.id = Date.now().toString();
       dispatch(add(newTask));
       setTask({value: "", id: -1});
  }


  function inputChange(e){
      setTask({...task, value: e.target.value});
  }

  return (
    <div className='home'>
      <h2>Add a Task here</h2>
      <form onSubmit={e => submit(e)}>
        <input type="text" placeholder='task' className="add form-control mb-3" value={task.value} onChange={e => inputChange(e)}/>
        <button className="btn btn-success">Add Task</button>
      </form>
    </div>
  );
}

export default Home;
