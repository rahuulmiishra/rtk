

import { TODO_ADD } from "../../constants/todo";

const InitialState = {
    todos: [],
    selectedTodo: "demo todo"
}

export default function todoReducer(state=InitialState, action) {

    const {type, myData} = action;
    //   console.log('todoReducer with', type, myData);
    switch(type) {
        
        case TODO_ADD:
            {
               
                state.todos = [myData, ...state.todos];
                return {...state};
            }
            

        default: 
            return state;
    }
}