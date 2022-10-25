// STEP 1 : Create a Redux Store
// app/store.js
// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })

// ############################################################
// STEP 2 : Provide the Redux Store to React
// index.js

// import { store } from './app/store'
// import { Provider } from 'react-redux'

//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// ############################################################
// STEP 3 : Create a Redux State Slice
// Add a new file named counterSlice.js
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }
// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })
// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer

// ###############################################################################
// STEP 4: Add Slice Reducers to the Store
// in store.js

// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

// ###############################################################################
// STEP 5 : Use Redux State and Actions in React Components
// in any component you need "supposed : Counter.js" 

// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'

// export function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }