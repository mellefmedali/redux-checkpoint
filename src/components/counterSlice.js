import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value : 0,
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state) => {state.value+=1},
        decrment: (state) => {state.value-=1}
    }
})

export const {increment , decrment} = counterSlice.actions
export default counterSlice.reducer
