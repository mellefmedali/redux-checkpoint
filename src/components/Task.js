// Create  the following component:
// Addtask
// ListTask
// Task
// Every task should have the following attributes:I d, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task
// step N°1 create the store in which all the states will be saved
// step N1.1 :  import a reducer (detailed in the next steps), here it is the "rooReducer" from the rootReducer.js file
// step N°2 add a provider to the App
// import both Provider and store

import "./Task.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeIsDone } from './listSlice'

function Task(props) {
    const list = props.list
    const id = list.id
    const taskList = useSelector((state) => state.taskList)
    const dispatch = useDispatch()
    return (
        <div className='task'>
            {console.log(taskList.value)}
            <h3 className='taskId'>Task N° : {id}</h3>
            <p className="description">{list.description}</p>
            <button className='isDone' onClick={
                () => {console.log(taskList.value[id-1].isDone)}
            }
            >isDone : {String(list.isDone)}</button>
        </div>
    )
}

export default Task