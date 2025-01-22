import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import EmployeeService from '../Services/EmployeeService'

const AddEmployee = () => {
  const [employee, setEmployee]=useState({
    id:"",
    name:"",
    phone:"",
    email:""
  });

  const handleChange =(e)=>{
        const value=e.target.value;
        setEmployee({...employee, [e.target.name]:value})
  }
   
  const reset =(e)=>{
     e.preventDefault();
     setEmployee({
         id:"",
         name:"",
         phone:"",
         email:""
        });
  }
  const saveEmployee =(e)=>{
     e.preventDefault();
     EmployeeService.saveEmployee(employee)
     .then((response)=>{
      console.log("Employee saved successfully:", response.data);
      navigate("/")
    })
    .catch((error)=>{
      console.log("Error saving employee:", error.message);
    });
    
  }


  const navigate = useNavigate(); 
  return (
   // <div className='max-w-xl mx-40 bg-slate-400 my-15 rounded shadow py-4 px-8'> 
   <div className=' max-w-xl mx-40 bg-slate-700 my-15 rounded shadow py-1 px-1'> 
      
   {/* <div className=' bg-red-400 text-center  text-2xl mx-5 my-1  font-bold  py-2 px-1'> */}
   <div className='  text-center  text-2xl mx-5 my-1  font-bold  py-3 px-1'>
     <p className='bg-blue-800 inline-block '>Add 🧑‍💻 New Employee</p>
   </div>
   
   {/* <div className='bg-yellow-300 mx-5 my-0 px-4 py-0'> */} 
   <div className=' mx-5 my-0 px-4 py-0'>
   <input 
   type='text'  
   name='name' 
   value={employee.name}
   onChange={(e)=> handleChange(e)}
   className='w-full py-1 my-1 mx-0 text-slate-800 px-4 rounded-xl' placeholder='Name'>
   </input>

   <input
    type='number'
    name='phone'
    value={employee.phone}
    onChange={(e)=> handleChange(e)}  
    className='w-full py-1 my-1 mx-0 text-slate-800 px-4 rounded-xl' placeholder='Phone'>
   </input>

   <input
     type='email'
     name='email'
     value={employee.email}
     onChange={(e)=> handleChange(e)} 
     className='w-full py-1 my-1 mx-0 text-slate-800 px-4 rounded-xl' placeholder='Email'>
   </input>

   </div>
    
   {/* <div className=' bg-red-700 text-center text-1xl mx-5 my-2  font-bold  py-1 px-1 '> */}
   <div className=' text-center text-1xl mx-5 my-1  font-bold  py-3 px-1 '>

   <button 
     onClick={saveEmployee}
     className='bg-green-400 mx-3 px-4 py-1 rounded'>Save
   </button>
   
   <button 
     onClick={reset}
     className='bg-blue-400  mx-3 px-4 py-1 rounded'>Clear
     </button>

   <button 
     onClick={()=>navigate("/")}
     className='bg-red-400   mx-3 px-4 py-1 rounded'>Cancle
   </button>
   </div>

   </div>
  )
}

export default AddEmployee
