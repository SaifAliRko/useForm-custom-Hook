import { useState } from "react"
export const useForm =()=>{
  const [formState,setFormState]=useState({email:"",password:''})
  
  const inputHandler=(e)=>{
    setFormState(prev=>({
      ...prev,
      [e.target.name]:e.target.value,
    }))}
    const formHandler=(e)=>{
      e.preventDefault()
      console.log(formState)
    }

 
  return ([formState,inputHandler,formHandler])
} 