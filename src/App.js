import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { inputSliceAction } from "./store/slices/inputSlice";
import { addTodo,fetchData } from "./store/slices/todoSlice";
import { memo } from "react";

function App() {
  const todoText = useSelector(function (state) {
    return state.inputSlice.todoText;
  });

  

  const todos = useSelector(function (state) {
    return state.todoSlice.todos;
  });


  const todosStore = useSelector(function (state) {
    return state.todoSlice;
  });

  console.log(todosStore);


  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchData()).unwrap().then(d=> {
      console.log('data', d)
    })
   // dispatch(addTodo(todoText));
  }

  function handleInput(e) {
    const value = e.target.value;
    dispatch(inputSliceAction.updateTodoText(value));
  }

  return (
    <div>
      <MemoizeChild />
      <input id="sdsd" onInput={handleInput} text="" />{" "}
      <button onClick={handleClick}>Add Todo</button>
      <div>
        {todos.map((todo) => {
          const { name, id } = todo;

          return (
            <div key={id}>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Child() {
  const childName = useSelector(function (state) {
    return state.inputSlice.childName;
  });
  console.log('Re-Redner Child');
  return <h1>Child {childName}</h1>
}

const MemoizeChild = memo(Child);

export default App;
