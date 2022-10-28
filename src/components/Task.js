import "./Task.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeIsDone } from './listSlice'

function Task(props) {
    const list = props.list
    const id = list.id
    const isDone = list.isDone
    const taskList = useSelector((state) => state.taskList)
    const dispatch = useDispatch()


    return (
        <div className='task'>
            <h3 className='taskId'>N° : {id}</h3>
            <p className="description">{list.description}</p>
            <button className='isDone' onClick={
                () => {dispatch(changeIsDone(id , !isDone))}
            }
            >{isDone?"OK":"-"}</button>
        </div>
    )
}

export default Task