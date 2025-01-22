// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import EmployeeList from './Components/EmployeeList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>

      <Routes>

          <Route index element={  <EmployeeList/>} />
          <Route path="/" element={<EmployeeList />} /> 
          <Route path="/addEmployee" element={<AddEmployee />} /> 
          {/* <Route path="/editEmployee/:id" element={<UpdateEmployee />} />  */}
          <Route path="/editEmployee/:pid" element={<UpdateEmployee />} /> 
         
      </Routes>
      
      </BrowserRouter>
    
    </>
  );
}

export default App;



// import './App.css';
// import { Routes, Route } from 'react-router-dom'; // Import necessary components
// import AddEmployee from './Components/AddEmployee';
// import EmployeeList from './Components/EmployeeList';
// import Navbar from './Components/Navbar';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<EmployeeList />} /> {/* Main route */}
//         <Route path="/addEmployee" element={<AddEmployee />} /> {/* Add Employee route */}
//       </Routes>
//     </>
//   );
// }

// export default App;

