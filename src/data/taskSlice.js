// OK Create  the following component:
// OK Addtask
// OK ListTask
// OK Task
// Every task should have the following attributes:Id, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task

import { createSlice } from "@reduxjs/toolkit";
import { isDocument } from "@testing-library/user-event/dist/utils";

// STEP N°3 : create a slice from the store , by importing the create slice 

const initialState = {
    id : 0,
    description : "please add the description",
    isDone : false
}

export const task = createSlice({
    name: "task",
    initialState,
    reducers:{
        setId : (state) => {
            state.id = state.id + 1
        }
    },
})