import './App.css';
import { ListTask } from './components/ListTask';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      {ListTask.map(e => <Task key={e.id} list={e}/>)}
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
// Edit a task