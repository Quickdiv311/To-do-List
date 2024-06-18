import React, { useContext } from 'react';
import AppContext from '../../context';
import './list.css';
import Task from '../task/Task';

const List = () => {

  const {tasks} = useContext(AppContext);

  return (
    <div className='list'>
        <h1>Tasks</h1>
      {tasks.map((task) => (
          <Task task={task}/>
      ))}
    </div>
  );
}

export default List;
