import React, { useContext, useState } from 'react';
import './task.css';
import AppContext from '../../context';
import { useDispatch } from 'react-redux';
import { deleteTodo, update } from '../../store/reducers/todo-store';

const Task = ({task}) => {
 
  const [edit, setEdit] = useState(false);
  const [focussed, setFocussed] = useState(false);
  const [changed, setChanged] = useState(false);
  const [newTask, setNewTask] = useState({...task});
  const dispatch = useDispatch();

  function handleUpdate(){
     setEdit(true);
  }

  function handleSave(){
     dispatch(update([task.id, newTask]));
     setEdit(false);
     setChanged(false);
  }

  function handleCancel(){
     setNewTask(task);
     setEdit(false);
     setChanged(false);
  }

  function handleChange(e){
   let changededValue = e.target.value;
   setNewTask({...newTask, value: changededValue});

   if(changededValue !== task.value)
      setChanged(true);
   else
      setChanged(false);
  }

  return (
    <div className='task'>
       {!edit ? 
         <h5>{task.value}</h5> : 
         <input type='text' 
                className='edit'
                value={newTask.value} 
                onChange={handleChange}
                onFocus={() => setFocussed(true)}
                onBlur={() => setFocussed(false)}
                />
       }
       <div className='buttons'>
         {edit ? 
          <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
         :<button className="btn btn-danger" onClick={() => dispatch(deleteTodo(task))}>Delete</button>}
          {edit?
          changed ? <button className="btn btn-primary" onClick={handleSave}>Save</button> : "" :
          <button className="btn btn-primary" onClick={handleUpdate}>Update</button>}
       </div>
    </div>
  );
}

export default Task;
