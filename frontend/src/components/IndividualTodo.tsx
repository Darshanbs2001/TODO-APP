import { todoContext } from "../contexts/Todo";
import {useContext} from 'react';

type Todo={
  description:string,
  _id:string
}
interface Props{
  data:Todo,
  id:number,
}
export default function IndividualTodo({data,id}:Props) {
  
  const {deletetodo,setUpdating} = useContext(todoContext);
  
  return (
    <div className="box">
      <div className="text">
      {data.description}
      </div>
      <div className="controls">
        <button onClick={()=>setUpdating(data.description,data._id)}>📝</button>
        <button onClick={()=>deletetodo(id,data._id)}>❌</button>
      </div>
    </div>
  )
}

