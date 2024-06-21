import { Todo } from "../types/Todotypes";

export async function getTodo(setError:(message:string)=>void):Promise<Todo[]|undefined>{
        let data= await fetch('http://localhost:8000/todo/getall');
        
        let returndata=await data.json();
        if(!data.ok){ 
            setError(returndata.message);
         }
        return returndata;
        
}      
        
export async function deleteTodo(todoid:string,setError:(message:string)=>void):Promise<void>{
      try{   
        let data=await fetch('http://localhost:8000/todo/delete',{
            method:'DELETE',
            headers:{"content-type":'application/json'},
            body:JSON.stringify({id:todoid})
    });
        let json=await data.json();
        if(!data.ok){
            setError(json.message);
        }
        console.log(data);
}
 catch(e)
 {
    console.log(e);
 }
}   
export async function createtodo(desc:string,setError:(message:string)=>void):Promise<Todo[]|undefined>{
  try{
    let data=await fetch('http://localhost:8000/todo/create',{
    method:'POST',
    headers:{
        "content-type":'application/json'
    },
    body:JSON.stringify({desc:desc})

})
   let json=await data.json();
    if(!data.ok)
    {
        setError(json.message)
        
    }
    let returndata=await getTodo(setError);
    return returndata;
  }
 catch(e){
     console.log(e);
 }  
}
  

export async function updatetodo(id:string,desc:string,setError:(message:string)=>void):Promise<void>
{
  
    let data=await fetch('http://localhost:8000/todo/update',
    {
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({id:id,desc:desc})
  })
  let json=await data.json();
  if(!data.ok){
    setError(json.message);
  }
  console.log(data);


}