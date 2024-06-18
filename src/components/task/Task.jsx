import React, { useContext, useState } from 'react';
import './task.css';
import AppContext from '../../context';

const Task = ({task}) => {
 
  const {dispacher} = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const [newTask, setNewTask] = useState({...task});

  function handleUpdate(){
     setEdit(true);
  }

  function handleSave(){
    console.log(newTask);
     dispacher("update", newTask);
     setEdit(false);
  }

  return (
    <div className='task'>
       {!edit ? <h5>{task.value}</h5> : <input type='text' className='edit' value={newTask.value} onChange={e => setNewTask({...newTask, value: e.target.value})}/>}
       <div className='buttons'>
          <button className="btn btn-danger" onClick={() => {dispacher("delete", task)}}>Delete</button>
          {edit ?
          <button className="btn btn-primary" onClick={handleSave}>Save</button> :
          <button className="btn btn-primary" onClick={handleUpdate}>Update</button>}
       </div>
    </div>
  );
}

export default Task;
