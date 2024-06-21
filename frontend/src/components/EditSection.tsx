import { ChangeEvent } from "react"

type todoProps={
    todo:string,
    handleChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    isUploading?:boolean,
    setdata:(todo:string)=>void,
  }
export const EditSection = ({todo,handleChange,isUploading,setdata}:todoProps) => {
  return (
    <div className="Edit Section">
     <input type="text" value={todo} onChange={(e)=>handleChange(e)} placeholder="Enter a task to add"/>
     <button onClick={()=>{setdata(todo)}}>{isUploading?"Update":"Add"}</button> 
    </div>
  )
}
