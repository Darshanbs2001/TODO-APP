import './App.css'
import {useContext} from 'react';
// import {useEffect, useState} from 'react'; 

import IndividualTodo from './components/IndividualTodo';
import { todoContext } from './contexts/Todo';
// import { createtodo, deleteTodo, getTodo, updatetodo } from './helpers/todoFunction';
import {Todo } from './types/Todotypes';
// import { ErrorProps, CustomError } from './components/Error';

function App():JSX.Element{
//    const [desc,setDescription]=useState("");
//    const [data,setdata]=useState<Todo[]|undefined>([]);
//    const [id,setId]=useState<string>("");
//    const [isUpdating,setisUpdating]=useState(false);
   
//    const [Err,setError]=useState<any>();
//    const [loading,setLoading]=useState<boolean>(false);
   
//    useEffect(()=>{
//       async function fetchall(){
//           setLoading(true);
//           setError("");
//           let startdata=await getTodo(setError);
//           setLoading(false);
//           setdata(startdata);
          
//       } 
//       fetchall();
     
//     return ()=>{};
// },[])
//    const addtodata=async()=>{
//       try{
//         setLoading(true); 
//         setError("");
//       let returndata=await createtodo(desc,setError);
      
//       setdata(returndata);
//       setLoading(false);
//       setDescription("");
//       }
//       catch(e){
//          console.log(e);
//       }
      
//    }
//    const deletetodo=async(id:number,todoId:string)=>{
//       try{
//        setLoading(true)
//        setError("");
//       if(id===id){
//          setDescription("")
//          setisUpdating(false);
//       }

//       await deleteTodo(todoId,setError);
//       let updatedata=await getTodo(setError);
//       setLoading(false);
//       setdata(updatedata);

//    }
//    catch(e){
//       setError(e);
//    }
// }
//    const setUpdating=(desc:string,id:string)=>
//    { 
  
//       console.log(desc);
//       setId(id);
//       setisUpdating(true);
//       setDescription(desc);
//    }
//    const updatetheTodo=async()=>{
//      try{
//       setLoading(true);
//       setError("");
//        await updatetodo(id,desc,setError);
//        let updatedata=await getTodo(setError);
//        setLoading(false);
//        setdata(updatedata);
//        setDescription("");
//        setisUpdating(false);
//      }
//      catch(e){
//       setError(e);
//      }
       
   
//    }
   const {todos,description,loading,Err,setDescription,addtodata,updatetheTodo,isUpdating}=useContext(todoContext);
   if(loading){
      return <div>Loading...</div>
   }
   

return(
<>
  <div className="wrapper">
   <div className="upper-section">
      <input type="text" autoFocus className="inputfield" value={description} onChange={(e)=>setDescription(e.target.value)} onKeyDown={(e:React.KeyboardEvent)=>{
         if(e.code==="Enter"){
         isUpdating?updatetheTodo():addtodata()
      }}}/>
      <button onClick={isUpdating?updatetheTodo:addtodata}>{isUpdating?"Update":"Add"}</button>
   </div>
   <div className="lower-section">
      {
         // data
            todos?.map((d:Todo,index:number)=>{
            return(<IndividualTodo id={index} /*{/*Delete={deletetodo}update={setUpdating}}*/ key={index} data={d}/>)
         })
      }
       {Err?<div>{Err}</div>:null}
   </div>
  </div>
 
</>
);
}

export default App
