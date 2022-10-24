// Create  the following component:
// Addtask
// ListTask
// Task
// Every task should have the following attributes:I d, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task
// step N°1 create the store in which all the states will be saved
// step N1.1 :  import a reducer (detailed in the next steps), here it is the "rooReducer" from the rootReducer.js file
    // step N°2 add a provider to the App
    // import both Provider and store
// STEP N°3 : create a slice from the store , by importing the create slice 


import { createSlice } from "@reduxjs/toolkit";

// STEP N°3 : create a slice from the store , by importing the createslice 

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