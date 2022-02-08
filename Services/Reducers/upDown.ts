import { decrement, increment } from "../ActionTypes/actionTypes";

const initialState = 10;

const changeNumber = (state = initialState, action: { type: string; param: number; })=>{
    if (action.type === increment) {
        return state + action.param;
    }
    else if (action.type === decrement) {
        return state - 1;
    }
    else{
        return initialState
    }
}

export default changeNumber