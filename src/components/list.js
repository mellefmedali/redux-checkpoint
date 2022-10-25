import { useSelector, useDispatch } from 'react-redux'
import './list.css'
import { list, addTask } from './listSlice'
import Task from "./Task"
import { addDescription } from './descriptionSlice'


export default function List() {
    const taskList = useSelector((state) => state.taskList.value)
    const description = useSelector((state) => state.description.value)
    const dispatch = useDispatch()
    return (
        <div>
            <form>
                <input id='description' type='text' placeholder='inset your note' name='description' onChange={(event) => dispatch(addDescription(event.target.value))}/>
                </form>
            <button onClick={() => dispatch(addTask(
                {
                    id: taskList.length+1,
                    description: description,
                    isDone:false
                }
                ))}>
                ADD TASK !
            </button>
            <div className='taskList'>
            {taskList.map((e) => <Task key={e.id} list={e}/>)}
            </div>
        </div>
    )
}

