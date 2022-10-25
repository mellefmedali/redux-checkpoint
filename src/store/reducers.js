import {createSlice} from  '@reduxjs/toolkit'

export const taskListSlice  = createSlice({
    name : "taskList",
    intialState: {
        value : [{id : 1, description:"first task", isDone:false}]
    },
    reducers:{
        add : (state) => {
            state.value = [...state, {id : 2, description:"decond task RTOOLKIT", isDone:false}]
        }
    }
});

export const {add} = taskListSlice.actions;
export default taskListSlice.reducer