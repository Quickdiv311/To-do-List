import './App.css';
import Home from './components/home/Home';
import List from './components/list/List';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  
  return (
    <Provider store={store}>
       <Home/>
       <List/>
    </Provider>
  );
}

export default App;
