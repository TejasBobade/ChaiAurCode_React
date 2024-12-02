import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

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

// export functionality 
export const {addTodo, removeTodo} = todoSlice.actions

// Store also need to be aware of all this reducers
// If strore don't have aceess it may not be able to manatain store it is an restricted store this sore does not take value from everware
// It only use the reducers which are registered and take value from them and update it.
export default todoSlice.reducer
