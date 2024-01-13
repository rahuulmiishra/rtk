

import { createAction, createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'inputtodo',
    initialState: {todoText: '', childName:'JS PP'},
    reducers: {
        updateTodoText(state, action) {
            state.todoText = action.payload;
        }
    }
});




const actions = inputSlice.actions;

export const inputSliceAction = actions;
export default inputSlice.reducer;
