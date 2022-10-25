import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [{id:1, description:"test", isDone:true}]
}

export const listSlice = createSlice( {
    name : "list",
    initialState,
    reducers:{
        addTask : (state,action) => {state.value = [...state.value,action.payload]},
        changeIsDone : (state, action) => {state.value = action.payload}
        // taskList.value[id - 1].isDone
    }
})

export const {addTask, changeIsDone} = listSlice.actions
export default listSlice.reducer
