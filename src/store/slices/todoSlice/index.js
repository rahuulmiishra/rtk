import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", (data, {dispatch}) => {
  return new Promise((res) => {
    dispatch({type:'todo/loading'});
    setTimeout(() => {
      res("Data Received");
    }, 3000);
  });
});

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], incomingTodo: "" },
  reducers: {
    addTodo(state, action) {
      const newTodo = { name: action.payload, id: new Date().getTime() };
      state.todos.push(newTodo);
    },
    loading (state) {
        state.isLoading = 'asdasdasd';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
