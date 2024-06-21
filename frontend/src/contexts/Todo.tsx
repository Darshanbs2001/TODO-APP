import {PropsWithChildren, createContext,useState,useEffect} from 'react';
import { Todo } from '../types/Todotypes';
import {getTodo,deleteTodo,createtodo,updatetodo} from '../helpers/todoFunction';


interface todoContextProps{
   todos:Todo[]|undefined,
   loading:boolean,
   isUpdating:boolean,
   description:string,
   setDescription:(desc:string)=>void,
   Err:string,
   addtodata:()=>void,
   deletetodo:(id:number,todoId:string)=>void,
   setUpdating:(desc:string,id:string)=>void,
   updatetheTodo:()=>void

}
export const todoContext=createContext<todoContextProps>();

export function TodoProvider({children}:PropsWithChildren){
  const [todos,setTodo]=useState<Todo[]|undefined>([])
  const [loading,setLoading]=useState<boolean>(false);
  const [Err,setError]=useState<string>("");
  const[id,setId]=useState<string>("");
  const [isUpdating,setisUpdating]=useState<boolean>(false);
  const [description,setDescription]=useState<string>("");
  useEffect(()=>{
    async function fetchall(){
        setLoading(true);
        setError("");
        let startdata=await getTodo(setError);
        setLoading(false);
        setTodo(startdata);
        
    } 
    fetchall();
   
  return ()=>{};
},[])
 const addtodata=async()=>{
    try{
      setLoading(true); 
      setError("");
    let returndata=await createtodo(description,setError);
    setTodo(returndata);
    setLoading(false);
    setDescription("");
    }
    catch(e){
       console.log(e);
    }
    
 }
  const deletetodo=async(id:number,todoId:string)=>{
    try{
     setLoading(true)
     setError("");
    if(id===id){
       setDescription("")
       setisUpdating(false);
    }

    await deleteTodo(todoId,setError);
    let updatedata=await getTodo(setError);
    setLoading(false);
    setTodo(updatedata);

 }
 catch(e){
    console.log(e);
 }
}
const setUpdating=(desc:string,id:string)=>
{ 
   console.log(desc);
   setId(id);
   setisUpdating(true);
   setDescription(desc);
}
const updatetheTodo=async()=>{
  try{
   setLoading(true);
   setError("");
    await updatetodo(id,description,setError);
    let updatedata=await getTodo(setError);
    setLoading(false);
    setTodo(updatedata);
    setDescription("");
    setisUpdating(false);
  }
  catch(e){
  console.log(e);
  }
    

}
  return (
    <todoContext.Provider value={{todos,loading,Err,isUpdating,description,setDescription,addtodata,deletetodo,setUpdating,updatetheTodo}}>
    {children}
    </todoContext.Provider>
  )
}