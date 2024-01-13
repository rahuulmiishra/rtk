

export const addTodo = (todo)=> {
    return {
        type: 'ADD',
        payload: todo
    }
}