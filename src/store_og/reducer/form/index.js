export default function formReducer(state={text:''}, action) {
    const {type, payload} = action;

    switch(type) {
        case 'TEXT': {
            state.text = payload;
            return {...state}
        }
           
        default:
            return state;
    }
}