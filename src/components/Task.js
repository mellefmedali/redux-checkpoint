import "./Task.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeIsDone, changeDescription } from './listSlice'
import { useState } from "react"

function Task(props) {
    const list = props.list
    const { id, isDone, description } = list
    const dispatch = useDispatch()
    const [newDesc, setNewDesc] = useState(description)
    const [showDesc , setShowDesc] = useState("hidden")
    const handlDescriptionClick = () => {
        setShowDesc (showDesc=="hidden"?"visible":"hidden");
    }


    return (
        <div className='task'>
            <h3 className='taskId'>N° : {id}</h3>
            <p className="description" onClick={handlDescriptionClick}
            >{description}</p>
            <div style={{visibility:showDesc}}>
            <input  onChange={(e) => { setNewDesc(e.target.value) }}/>
            <button onClick={
                () => { 
                    dispatch(changeDescription(id, newDesc))
                    handlDescriptionClick()
                }
            }>V</button>
            </div>
            <button className='isDone'  onClick={
                () => { dispatch(changeIsDone(id, !isDone)) }
            }
            >{isDone ? "OK" : "-"}</button>
        </div>
    )
}

export default Task