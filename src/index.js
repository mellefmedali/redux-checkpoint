import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "@reduxjs/toolkit"
import { store } from './data/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // step N°2 add a provider to the App
    // import both Provider and store
<Provider store = {store}> 
    <App />
</Provider>
);


// Create  the following component:
// Addtask
// ListTask
// Task
// Every task should have the following attributes:I d, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task