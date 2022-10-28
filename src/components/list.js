import { useSelector, useDispatch } from 'react-redux'
import './list.css'
import { list, addTask } from './listSlice'
import Task from "./Task"
import { addDescription } from './descriptionSlice'
import { useState } from 'react'


export default function List() {
    const taskList = useSelector((state) => state.taskList.value)
    const description = useSelector((state) => state.description.value)
    const dispatch = useDispatch()
    const [okFilter, setOkfilter] = useState(false)

    const handleDone = () => {setOkfilter = true}
    const handleNotDone = () => {setOkfilter = false}
    
    return (
        <div>
            <form>
                <div className='filter'>
                    {/* <input type="checkbox" id="done" name="done" value={okFilter} /> */}
                    {/* <label >{okFilter}</label><br /> */}
                    {/* <input type="checkbox" id="notyet" name="notyet" value="notyet" /> */}
                    {/* <label >Waiting Tasks</label><br /> */}
                    <button onClick={handleDone}>Show Done</button>
                    <button onClick={handleNotDone}>Show Not Yet Done</button>
                </div>
                <input id='description' type='text' placeholder='inset your note' name='description' onChange={(event) => dispatch(addDescription(event.target.value))} />
                <br />
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
            <div className='taskList'>
                {taskList.filter((e) => (e.isDone == {okFilter})).map(
                    (e) => <Task key={e.id} list={e} />
                )}


            </div>
        </div>
    )
}

