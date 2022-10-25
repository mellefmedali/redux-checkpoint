import { createSlice } from "@reduxjs/toolkit"

export const descriptionSlice = createSlice( {
    name : "description",
    initialState  : {value:""},
    reducers:{
        addDescription : (state,action) => {state.value = action.payload }
    }
})

export const {addDescription} = descriptionSlice.actions
export default descriptionSlice.reducer