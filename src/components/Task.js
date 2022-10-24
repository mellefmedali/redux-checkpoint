// OK Create  the following component:
// OK Addtask
// OK ListTask
// OK Task
// Every task should have the following attributes:Id, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task

import React from 'react'

function Task() {
    return (
        <div>
            <h2>Task title</h2>
            <h2>ID: </h2>
            <p>Description : </p>
            <p>isDone : </p>
        </div>
    )
}

export default Task