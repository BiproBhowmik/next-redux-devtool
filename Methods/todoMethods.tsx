import { hasUncaughtExceptionCaptureCallback } from 'process';
import React, { useEffect } from 'react';
import { get, post } from '../Helper/axios';

export async function insertTodo(param: object) {
    const res = await post("/createTodo", param)
    if (res.status == 200) {
        return res.data
    }
    return false
}

export async function deleteTodo(id: number) {
    const res = await post("/deleteTodo", { id: id })
    if (res.status == 200) {
        return res.data;
    }
    return false;
}

export const getAllTodoList = async () => {
    const res = await get("/getTodos")
    if (res.status == 200) {
        return res.data
    }
    return false
}


export default async function useGetTodoList() {
    useEffect(() => {
        getAllTodo();
      }, []);
    
      const getAllTodo = async () => {
        const res = await get("/getTodos")
    if (res.status == 200) {
        return res.data
    }
    return false
      }
}