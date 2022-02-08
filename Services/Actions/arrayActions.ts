import { deleteObj, objInsertToArray, storeArray } from "../ActionTypes/actionTypes"

export const storeAllData = (array: Array<Object>)=>{
    return {
        type: storeArray,
        param: array
    }
}

export const insertData = (array: Array<Object>)=>{
    return {
        type: objInsertToArray,
        param: array
    }
}

export const deleteData = (index: number)=>{
    return {
        type: deleteObj,
        param: index
    }
}

