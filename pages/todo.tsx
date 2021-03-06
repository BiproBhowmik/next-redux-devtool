import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, insertData, storeAllData } from '../Services/Actions/arrayActions';
import { deleteTodo, getAllTodoList, insertTodo } from '../Methods/todoMethods'
import useGetTodo from '../CustomHokes/useGetTodo';

export default function todo() {

  const [userData, setuserData] = useState({
    name: "",
    age: ""
  });

  const dispatch = useDispatch();

  const todoState = useSelector((state: any) => {
    return state.todoReducer
  });

  const [todoStateData, setTodoStateData] = useState([]);

  const pro = useGetTodo("/getTodos"); //Custom Hook

  // console.log(pro);

  useMemo(() => {
    // const pro = useGetTodo();
    // console.log(pro);
    
    pro.then((res) => {
      setTodoStateData(res);
    })
    console.log(pro);
  }, []);
  
  // pro.then((res)=>{
  //   setTodoStateData(res);
  // })

  // const showTodos = todoState.array.map((item: any, index: number) => {
  const showTodos = todoStateData.map((item: any, index: number) => {

    return (
      <div key={index}>
        <h6>Index: {index}</h6>
        <h6>ID: {item.id} </h6>
        <h6>Name: {item.name} </h6>
        <h6>Age: {item.age} Years</h6>
        <button onClick={() => handleClickDelete(index, item.id)}>Delete</button>
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


      const data = await insertTodo({ ...userData })
      setTodoStateData(todoStateData)

      if (data) {
        // dispatch(insertData([data]));
        setTodoStateData([data].concat(todoStateData));
        clearState();
      }
    } else {
      alert("Empty Fild Is Not Allowed!!");
    }
  }

  const handleClickDelete = async (index: number, id: number) => {
    const data = await deleteTodo(id);
    if (data) {
      dispatch(deleteData(index))
    }
  }

  const clearState = () => {
    setuserData({
      name: "",
      age: "",
    })
  }

  return (
    <>
      <div>
        <input type="text" placeholder='Name' name='name' value={userData.name} onChange={(e) => handleChange(e)} />
        <input min={0} type="number" placeholder='Age' name='age' value={userData.age} onChange={(e) => handleChange(e)} />
        <button onClick={handleClick}>Add+</button>
      </div>

      {showTodos}
    </>
  );
}

