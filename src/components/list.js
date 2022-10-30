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
    const [filterStatus, setFiltreStatus] = useState("all")

    const dispatch = useDispatch()

    function toggleFilterStatus() { filterStatus=="done"?setFiltered("notyet"):setFiltered("done") }

    function handleFilter() {
        // setInitialList(taskList)
        // dispatch(filterList(initialList.filter((task) => task.isDone == filtered)))
        toggleFilterStatus()
    }


    function handleNotFiltered() {
        filterStatus("all")
        dispatch(filterList(taskList))
        setFiltered(false)
        console.log("logged")
    }


    return (
        <div>
            <AddTask />
            <button onClick={handleFilter}>
                Filter {filtered ? "Done" : "NotYet"}
            </button>
            <button onClick={handleNotFiltered}>
                X
            </button>
            <div className='taskList'>
                {initialList.filter(
                    
                    ()=>{
                        switch (filterStatus) {
                            case "done":(e)=>e.isDone==true; break;
                            case "notyet":e=>e.isDone==false; break;
                            case "all":e=>e; break;
                            default:
                                break;
                        }
                    }
                
                ).map(
                    (e) => <Task key={e.id} list={e} />
                )}
            </div>
        </div>
    )
}

