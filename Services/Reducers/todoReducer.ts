import { deleteObj, objInsertToArray, storeArray } from "../ActionTypes/actionTypes"

const initialState = {
    array: [],
}

const todoReducer = (state = initialState, action: { type: string; param: any; })=>{
    if (action.type === storeArray) {
        return {
            // ...state,
            // array: [...action.param, ...state.array],
            ...state,
            array: action.param
        };
    }
    else if (action.type === objInsertToArray) {
        return { 
            ...state,
            array: [...action.param, ...state.array],
        };
    }
    else if (action.type === deleteObj) {
        state.array.splice(action.param, 1)
        return { 
            ...state,
            array: state.array
        };
        
    }
    else{
        return initialState
    }
}

export default todoReducer