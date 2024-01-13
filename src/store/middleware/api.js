const api = ({dispatch}) => (next)=> (action)=> {

    // if(action.type !== 'apiRequest') {
    //     return next(action);
    // }

    // const {url, success} = action.payload;

    // fetch(url).then(d => {
    //     console.log(d);
    //     dispatch({type:success});
    //     next();
    // })
    console.log(action);
    next();
}

export default api;

/*
    type: 'API',
    payload: {url, method, data}
    onSuccess
    onError
*/