import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import
import EmployeeService from "../Services/EmployeeService";

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
      .then(() => {
        if(employees){
        setEmployees((prevElement)=>{
           return prevElement.filter((employee)=> employee.id !==id);
        })
      }
      })
      
  };

  const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`)
  };

  const navigate = useNavigate(); // Call useNavigate as a function

  return (
    <div>
      <div className="container mx-auto my-8">
        <div>
          <button
            onClick={() => navigate("/addEmployee")}
            className="bg-slate-600 hover:bg-teal-400 mx-40 my-2 font-semibold px-20 py-2 rounded"
          >
            Add Employee
          </button>
        </div>

        <div>
          <table className="shadow mx-40 my-1 font-semibold rounded">
            <thead className="bg-slate-600">
              <tr>
                <th className="px-5 py-3 uppercase tracking-wide">Name</th>
                <th className="px-5 py-3 uppercase tracking-wide">Phone</th>
                <th className="px-5 py-3 uppercase tracking-wide">Email</th>
                <th className="px-5 py-3 uppercase tracking-wide">Action</th>
              </tr>
            </thead>

            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-white hover:text-slate-600">
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.phone}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.email}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {/* <a>Edit 📝</a> */}

                      <button  onClick={(e, id) => editEmployee(e, employee.id)}
                        className="hover:text-green-500 hover:cursor-pointer">Edit 📝</button>

                      <button  onClick={(e, id) => deleteEmployee(e, employee.id)}
                        className="hover:text-red-600 hover:cursor-pointer">Delete 🗑️</button>

                      
                      {/* <a onClick={(e, id) => deleteEmployee(e, employee.id)}
                        className="hover:text-red-600 hover:cursor-pointer"
                        >Delete 🗑️
                      </a> */}

                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
