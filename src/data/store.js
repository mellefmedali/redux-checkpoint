// OK Create  the following component:
// OK Addtask
// OK ListTask
// OK Task
// Every task should have the following attributes:Id, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"

// step N°1 create the store in which all the states will be saved 
// step N1.1 :  import a reducer (detailed in the next steps), here it is the "rooReducer" from the rootReducer.js file
export const store = configureStore({
    reducer : {
        Task : rootReducer,
    }
});
