import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, insertData, storeAllData } from '../Services/Actions/arrayActions';
import {deleteTodo, getAllTodoList, insertTodo} from '../Methods/todoMethods'

export default function todo() {

  const [userData, setuserData] = useState({
    name: "",
    age: ""
  })

  const dispatch = useDispatch();

  const todoState = useSelector((state: any) => {
    return state.todoReducer
  });

  useEffect(() => {
    getAllTodo();
  }, []);

  const getAllTodo = async () => {
    const data = await getAllTodoList();
    if (data) {
      dispatch(storeAllData(data));
    }
  }

  const showTodos = todoState.array.map((item: any, index: number) => {

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
      
      if (data) {
        dispatch(insertData([data]));
        clearState();
      }
    } else {
      alert("Empty Fild Is Not Allowed!!")
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

