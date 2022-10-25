import {useSelector, useDispatch } from 'react-redux'
import { add } from '../store/reducers';

import React from 'react'

export default function AddTask() {
    const taskList = useSelector((state) => state.taskList)
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={
                    () => dispatch(
                        add({
                            id: 1, description: "first task", isDone: false 
                        })
            )
                }
            >
            add task
        </button>
        </div >
    )
}
