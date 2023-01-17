export const addToKart =(key) => {
    return ({
        type : 'ADD',
        payload : key
    });
}

export const removeFromKart =(key)=>{
    return ({
        type:'REMOVE',
        payload : key
    })
}