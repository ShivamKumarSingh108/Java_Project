// package com.example.demo;

// import org.springframework.web.bind.annotation.RestController;

// // import java.util.ArrayList;
// import java.util.List;

// // import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// // import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;



// @RestController
// public class DemoController {
    
//     // List<Employee> employees = new ArrayList<>();
//     EmployeeService employeeService = new EmployeeServiceImpl() ;


//     // Dependency Injection
//     // @Autowired
//     // EmployeeService employeeService;



//     @GetMapping("/employees")
//     public List<Employee> getAllEmployees() {
//         return employeeService.readEmployees();
//     }
    
//     @PostMapping("/employees")
//     public String createEmployee(@RequestBody Employee employee) {
//      return employeeService.createEmployee(employee);
      
//         //TODO: process POST request
//         // employees.add(employee);
//         // return "saved successfully";
//     }


//     @DeleteMapping("employees/{id}")
//     public String deleteEmployee(@PathVariable Long id){
//         if(employeeService.deleteEmployee(id))
//          return "Delete Successfully";
//         return "Not Found";
//     }
    
// }



package com.example.demo.Components.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Components.Model.Employee;
import com.example.demo.Components.Service.EmployeeService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")

@RequestMapping("/employees")
public class DemoController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.readEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.readEmployee(id);
    }

    @PostMapping
    public String createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if (employeeService.deleteEmployee(id)) {
            return "Deleted Successfully";
        }
        return "Not Found";
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }
}
