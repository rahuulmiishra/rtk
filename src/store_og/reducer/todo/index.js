

export default function todoReducer(state={todos:[]}, action) {
    const {type, payload} = action;

    switch(type) {
        case 'ADD': {
            const old = [...state.todos];
            old.push(payload);
            return {...state, todos:old}
        }
           
        default:
            return state;
    }
}