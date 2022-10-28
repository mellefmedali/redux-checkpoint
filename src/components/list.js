import { useSelector, useDispatch } from 'react-redux'
import './list.css'
import { list, addTask } from './listSlice'
import Task from "./Task"
import { useState } from 'react'


export default function List() {
    const taskList = useSelector((state) => state.taskList.value)
    // const description = useSelector((state) => state.description.value)
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()

    return (
        <div>
            <div className='newTask'>
                <form>
                    <input id='description' type='text' placeholder='inset your note' name='description' onChange={(event) => { setDescription(event.target.value) }} />
                </form>
                <button onClick={() => dispatch(addTask(
                    {
                        id: taskList.length + 1,
                        description: description,
                        isDone: false
                    }
                ))}>
                    ADD TASK !
                </button>
            </div>
            <div className='taskList'>
                {/* reste a chager false par une variable */}
                {taskList.filter((e)=>(e.isDone==false)).map(
                    (e) => <Task key={e.id} list={e} />
                )}


            </div>
        </div>
    )
}

