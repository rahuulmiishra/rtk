export const updateText2 = (text)=> {
    return {
        type: 'TEXT',
        payload: text
    }
}

export const updateText = (text) => {
    return (dispatch) => {
      //  dispatch(updateLoadingStateOfEmpData(true));
        setTimeout(() => {
            const data = 'RAMS';
            dispatch(updateText2(data));
           // dispatch(updateLoadingStateOfEmpData(false));
        }, 2000);
    };
}