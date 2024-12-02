# Redux
- Independent state management library
- react-redux -> Give connection with react
- redux-toolkit -> Gives battries

# Readux-toolkit
- store
- reducers
- useSelector
- useDispatch

# Steps to create store
- 1. import configureStore
- import {configureStore} from "@reduxjs/toolkit";
- 2. using method export variable
- export const store = configureStore({})
- fro step 3 setup reducer firest then come back
- 3. import { todoSlice } from "../features/todo/todoSlice";
export const store = configureStore({
    reducer: todoSlice
})

# Steps to create reducers in reduxToolkit
- we call in slices
- create a folder named features
- created folder named toto
- created file named todoSlice.js
- 1. import {createSlice, nanoid} from '@reduxjs/toolkit'
- nanoid -> create a unique id
- 2. const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}
- 3. create a slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // we get two thing always state , action
        // state give the access of initialState at current point -> current state
        // action -> we get the values which we want from action ex. id.
        addTodo: (state, action) => {
            const todo = {
                // create unique id
                id: nanoid(), 
                // payload is an object can contain id , email etc.
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})
- 4. export const {addTodo, removeTodo} = todoSlice.actions
// export functionality 
- 5. export default todoSlice.reducer
// Store also need to be aware of all this reducers
// If strore don't have aceess it may not be able to manatain store it is an restricted store this sore does not take value from everware
// It only use the reducers which are registered and take value from them and update it.

