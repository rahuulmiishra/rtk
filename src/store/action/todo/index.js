
import { TODO_ADD } from "../../constants/todo";


export function addTodoAction(todo) {
   
    return {
        type: TODO_ADD,
        myData:todo
    }
}

export function addTodoAfterDelay(todo) {
  return function(trigger) {
     setTimeout(()=> {
        trigger(addTodoAction(todo));
     },4000);
  }
}