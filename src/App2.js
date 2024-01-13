import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";
import "./App.css";

import { addTodoAfterDelay } from "./store/action/todo";
import { updateText } from "./store/action/form";

function App() {
  const todos = useSelector(function (state) {
    console.log(state);
    return state.todoReducer.todos;
  });

  const text = useSelector(function (state) {
    console.log(state);
    return state.formReducer.text;
  });

  console.log("from useSelector", todos);
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(updateText(e.target.value));
  }

  function addTodo() {
    dispatch(addTodoAfterDelay(text));
  }

  return (
    <div className="App">
      <h1>redux</h1>

      <input onInput={handleInput} />

      <button onClick={addTodo}>Add Todo </button>
      {text}
      {todos.length &&
        todos?.map((d) => {
          return <div key={d}>{d}</div>;
        })}

     <MemoizedChildComponet />
        
    </div>
  );
}


function ChildComponent() {
  const selectedTodo = useSelector(function (state) {
   
    return state.todoReducer.selectedTodo;
  });

  console.log('ChildComponentChildComponentChildComponent');

  return <h1>This is my Child Component {selectedTodo}</h1>
}
const MemoizedChildComponet = memo(ChildComponent);

export default App;
