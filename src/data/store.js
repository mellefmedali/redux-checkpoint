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

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"


export const store = configureStore({
    reducer : {
        Task : rootReducer,
    }
});
