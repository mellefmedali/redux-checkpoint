import './App.css';
import  listSlice from './components/listSlice';
import List from './components/list';
import AddTask from './components/AddTask';

function App() {

  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;

// OK Create  the following component:
// OK Addtask
// OK ListTask
// OK Task
// Every task should have the following attributes:Id, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// OK Edit a task