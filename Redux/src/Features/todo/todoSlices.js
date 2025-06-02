import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, task: 'Learn Redux Toolkit', isDone: false}],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTOdo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTOdo);
        },
        deleteTodo: (state, action) => {
            state.todos.filter((todo) => todo.id != action.payload);
        },
        markasDone: (state, action) => {
            state.todos = state.todos.map( todo => {
                if (todo.id === action.payload) {
                    todo.isDone = !todo.isDone;
                }
            })
        }
    }
 })

 export const { addTodo, deleteTodo, markasDone } = todoSlice.actions;

 export default todoSlice.reducer;