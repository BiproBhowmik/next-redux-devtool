import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNum, incNum} from '../Services/Actions';
import { deleteThisIndex, insertThisObj, storeThisArray } from '../Services/Actions/arrayActions';

export default function test() {

const [userData, setuserData] = useState({
    id: 1,
    name: "",
    age: ""
})

const dispatch = useDispatch();

const stateValue = useSelector((state: any) => {
    return state.changeNumber
});

const stateArrayValue = useSelector((state:any) => {
    return state.playWithArray
});

console.log(stateArrayValue);

const increment = (arg0: number)=> {
  dispatch(incNum(arg0))
}

const storeTheArray = ()=> {
  const theArray = [
    {
      id: 1,
      name: "Joy",
      age: 22,
    },
    {
      id: 2,
      name: "Bipro",
      age: 25,
    },
  ];
  dispatch(storeThisArray(theArray))
}

const showStateArrayValues = stateArrayValue.array.map((item:any, index:any) => {

  return (
    <div key={index}>
      <h6>Index: {index}</h6>
      <h6>ID: {item.id} </h6>
      <h6>Name: {item.name} </h6>
      <h6>Age: {item.age} </h6>
    <button onClick={()=>dispatch(deleteThisIndex(index))}>Delete</button>
    </div>
  )

})

const handleChange = (event: { target: { name: string; value: string } }) => {
  setuserData({
      ...userData,
      [event.target.name]: event.target.value
  })
}

const handleClick = async () => {
  if (userData.name && userData.age) {

    const res = await axios.post("http://localhost:3333/createTodo", { ...userData })
            if (res.status == 200) {

                dispatch(insertThisObj([userData]))
                
                setuserData({
                  id: 1,
                    name: "",
                    age: "",
                })
            }

  } else{
      alert("Empty Fild Not Allowed!!")
  }
}

  return (
      <>
        <h1>Increment-Decriment with Redux</h1>
        <h2>Value = {stateValue}</h2>
        <button onClick={()=> increment(2)}>+</button>
        <button onClick={()=> dispatch(decNum())}>-</button>


        <button onClick={()=> storeTheArray()}>Store An Array</button>

        <div>
          <input type="text" placeholder='Name' name='name' value={userData.name} onChange={(e)=>handleChange(e)}/>
          <input min={0} type="number" placeholder='Age' name='age' value={userData.age} onChange={(e)=>handleChange(e)}/>
          <button onClick={handleClick}>Add</button>
        </div>

        {showStateArrayValues}
      </>
  );
}

