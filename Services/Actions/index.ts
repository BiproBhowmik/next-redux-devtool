export const incNum = (num: any)=>{
    return {
        type: "INREMENT",
        param: num,
    }
}
export const decNum = ()=>{
    return {
        type: "DECREMENT"
    }
}