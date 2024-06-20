import React, { useContext } from 'react';
import AppContext from '../../context';
import './list.css';
import Task from '../task/Task';
import { useSelector } from 'react-redux';
import { TodoList } from '../../store/reducers/todo-store';

const List = () => {

  const tasks = useSelector(TodoList);

  return (
    <div className='list'>
        <h1>Tasks</h1>
      {tasks.length > 0 ? tasks.map((task) => (
          <Task task={task}/>
      ))
      :
      <h5 className='mt-5'>Please enter some tasks</h5>
    }
    </div>
  );
}

export default List;
