import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        value: [
            {id: 23, content: 'Set table'},
        ],
    },
    reducers: {
        addTodoItem(state, action) {
            state.value.push(action.payload);
        }
    }
});
 
export const { addTodoItem } = messageSlice.actions;

// exporting the message slice reducer to be available for importing by store
export default messageSlice.reducer;