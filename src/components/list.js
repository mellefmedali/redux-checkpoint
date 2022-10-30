import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterList } from './listSlice'
import AddTask from './AddTask'
import Task from "./Task"
import './list.css'


export default function List() {
    const taskList = useSelector((state) => state.taskList.value)
    const [initialList, setInitialList] = useState(taskList)
    const [filtered, setFiltered] = useState(false)
    const [isVisible, setIsVisible] = useState("visible")
    // const [filterStatus, setFiltreStatus] = useState("all")

    const dispatch = useDispatch()

    // function toggleFilterStatus() { filterStatus == "done" ? setFiltered("notyet") : setFiltered("done") }

    function handleFilterByNotyet() {
        setInitialList(taskList)
        dispatch(filterList(taskList.filter((task) => task.isDone == false)))
        setIsVisible("hidden")
        // toggleFilterStatus()
    }
    function handleFilterByDone() {
        // setInitialList(taskList)
        dispatch(filterList(taskList.filter((task) => task.isDone == true)))
        // toggleFilterStatus()
        setIsVisible("hidden")
    }


    function handleNotFiltered() {
        // filterStatus("all")
        setInitialList(taskList)
        dispatch(filterList(initialList))
        setFiltered(false)
        setIsVisible("visible")

        console.log("logged")
    }


    return (
        <div>
            <button onClick={
                () => {
                    setInitialList(taskList);
                    handleFilterByDone();
                }
            } style={{ visibility: isVisible }}>
                Filter by Done
            </button>
            <button onClick={handleFilterByNotyet} style={{ visibility: isVisible }}>
                Filter by Not Yet
            </button>
            <button onClick={handleNotFiltered} style={{ visibility: (isVisible=="visible"?"hidden":"visible") }}>
                Effacer le filter !
            </button>
            <div className='taskList'>
                {taskList.map(
                    (e) => <Task key={e.id} list={e} />
                )}
            </div>
        </div>
    )
}

