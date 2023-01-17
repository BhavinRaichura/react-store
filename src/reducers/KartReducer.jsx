const initialKart = []

function KartReducer(state=[], action) {
    switch(action.type){
        case 'ADD':
            return [...state,action.payload];
        case 'REMOVE':
            return state = state.filter((d) => d!==action.payload);
        default : 
            return initialKart;
    }
    
}

export default KartReducer;