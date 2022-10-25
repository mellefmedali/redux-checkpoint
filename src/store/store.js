import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counterSlice'
import taskListReducer from '../components/listSlice'
import descriptionReducer from '../components/descriptionSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        taskList : taskListReducer,
        description : descriptionReducer,
    }
})