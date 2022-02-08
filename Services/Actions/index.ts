import { decrement, increment, storeArray } from "../ActionTypes/actionTypes"

export const incNum = (num: any)=>{
    return {
        type: increment,
        param: num,
    }
}

export const decNum = ()=>{
    return {
        type: decrement
    }
}