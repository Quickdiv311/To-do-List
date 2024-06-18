import './App.css';
import { useState } from 'react';
import AppContext from './context';
import Home from './components/home/Home';
import List from './components/list/List';

function App() {
  const [tasks, setTasks] = useState([]);
  const dispacher = (action, param) => {
    switch(action){
      case 'add':
        {
            let list = tasks.slice();
            list.push(param);
            setTasks(list);
            break;
        }
        case 'delete':{
           let list = tasks.slice();
           console.log(param.id);
           let index = list.findIndex(i => i.id == param.id);
           list.splice(index,1);
           setTasks(list);
           break;
        }
        case 'update':{
          let list = tasks.slice();
          let index = list.findIndex(i => i.id == param.id);
          list[index] = {...param};
          setTasks(list);
          break;
        }
       
        default: {}
    }
  }
  
  return (
    <AppContext.Provider value={{tasks, dispacher}}>
       <Home/>
       <List/>
    </AppContext.Provider>
  );
}

export default App;
