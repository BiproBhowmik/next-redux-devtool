import { get } from '../Helper/axios';

export default async function useGetTodo(endPoint:string){
  const res = await get(endPoint)
  if (res.status == 200) {
      return res.data
  }
  return []
}
