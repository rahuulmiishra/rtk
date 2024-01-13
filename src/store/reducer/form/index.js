

import { FORM_UPDATE } from "../../constants/form";

import { TODO_ADD } from "../../constants/todo";

const InitialState = {
    text:'',
}

export default function formReducer(state=InitialState, action) {

    const {type, myData} = action;
    //   console.log('formReducer with', type, myData);
    switch(type) {
        
        case FORM_UPDATE:
            {
               
                state.text =myData;
                return {...state};
            }
            case TODO_ADD:
                {
                   
                    state.text ='Custom Todo';
                    return {...state};
                }
            

        default: 
            return state;
    }
}