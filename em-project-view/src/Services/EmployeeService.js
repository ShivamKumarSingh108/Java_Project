
import axios from 'axios'

//sending data like name and email. etc to backend as "THUNDERCLIENT / POSTMAN ".

const EMPLOYEE_S_API_BASE_URL ="http://localhost:9090/employees" // this is the url same on the thunderClient where we send data to MySQL.

// Endpoint: EMPLOYEE_S_API_BASE_URL is the target URL where the request( requet like Get/Post/Put/Update) is sent.

// Purpose: A class named EmployeeService is created. This class will contain methods that allow the application to interact with the employee API, such as saving new employee data

class EmployeeService{  
    // Receiving Data: The employee parameter in the method signature represents the data being passed to the method when it is called. This data is typically an object that contains information about a new employee (e.g., name, email, position).
    saveEmployee(employee){
       return axios.post(EMPLOYEE_S_API_BASE_URL, employee)
     } 
     //Payload: The employee object is passed as the second argument, which represents the data being sent to the server (e.g., name, email, etc.).
//Sending data( via employee object ) to the Backend: You then send this data to the backend by using axios.post(EMPLOYEE_S_API_BASE_URL, employee), where EMPLOYEE_S_API_BASE_URL points to your server endpoint (http://localhost:9090/employees).

// Axios POST Request:
// The axios.post method sends this employee object as the request body to the API endpoint defined by EMPLOYEE_S_API_BASE_URL.
// This request typically results in the server receiving the data and processing it (e.g., inserting it into a database).  


getEmployees(){
    return axios.get(EMPLOYEE_S_API_BASE_URL) 
}

getEmployeeById(id){
    return axios.get(EMPLOYEE_S_API_BASE_URL+"/"+id)
}
deleteEmployeeById(id){
    return axios.delete(EMPLOYEE_S_API_BASE_URL+"/"+id)
}
updateEmployeeById(employee, id){
    return axios.put(EMPLOYEE_S_API_BASE_URL+"/"+id, employee)
}


}


// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();

// Purpose of export default new EmployeeService();
// Creating an Instance: This line creates one single instance of the EmployeeService class. Think of it like making a single copy of a tool that you’ll use throughout your project.

// Exporting the Instance: By exporting this instance, you make it available for other parts of your application to use. You don’t have to create a new instance every time you need to use it, which saves time and resources.

// Singleton Pattern: This approach is known as the "singleton pattern." It ensures that there’s only one instance of EmployeeService in your app, allowing it to maintain a consistent state. For example, if you store some settings or configurations in it, they will be the same everywhere you use that instance.

// In Summary
// You create one copy of EmployeeService.
// You can use this copy anywhere in your app without recreating it.
// This keeps things simple and consistent.


