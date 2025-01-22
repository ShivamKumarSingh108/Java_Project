import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

const UpdateEmployee = () => {

    
    
    //    const {id}=useParams();
       const {pid}=useParams();
       const navigate = useNavigate(); 
       const [employee, setEmployee]=useState({
        //  id:id,
         id:pid,
         name:"",
         phone:"",
         email:""
       });

       const handleChange =(e)=>{
        const value=e.target.value;
        setEmployee({...employee, [e.target.name]:value})
       }
       
       useEffect(() => {
        const fetchData = async () => {  
         //   setLoading(true);
          try {
            const response = await EmployeeService.getEmployeeById(employee.id);
            setEmployee(response.data);
          } catch (error) {
            console.log(error);
          }
         //   setLoading(false);
        };
        if (employee.id) { // Check if employee.id is available
            fetchData(); //Conditional Fetch: The check if (employee.id) helps prevent unnecessary API calls when employee.id is not defined, which is a good practice.
          }
      }, [employee.id]);


    const updateEmployee =(e)=>{
        e.preventDefault();
      
        // EmployeeService.updateEmployeeById(employee, id)
        EmployeeService.updateEmployeeById(employee, pid)
         .then((response)=>{
           console.log("Employee saved successfully:", response.data);
           navigate("/")
        })
       .catch((error)=>{
          console.log("Error saving employee:", error.message);
        });  
    }


  
  return (
   // <div className='max-w-xl mx-40 bg-slate-400 my-15 rounded shadow py-4 px-8'> 
   <div className=' max-w-xl mx-40 bg-slate-700 my-15 rounded shadow py-1 px-1'> 
      
   {/* <div className=' bg-red-400 text-center  text-2xl mx-5 my-1  font-bold  py-2 px-1'> */}
   <div className='  text-center  text-2xl mx-5 my-1  font-bold  py-3 px-1'>
     <p className='bg-blue-800 inline-block '>Update 🧑‍💻 Employee</p>
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
     onClick={updateEmployee}
     className='bg-green-400 mx-3 px-4 py-1 rounded'>Update
   </button>
   
  
   <button 
     onClick={()=>navigate("/")}
     className='bg-red-400   mx-3 px-4 py-1 rounded'>Cancle
   </button>
   </div>

   </div>
  )
}

export default UpdateEmployee