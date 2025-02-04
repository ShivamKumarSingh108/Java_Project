// package com.example.demo;

// import java.util.List;

// public interface EmployeeService {
//     String createEmployee(Employee employee);
//     List<Employee> readEmployees();
//     boolean deleteEmployee(Long id);
// }


package com.example.demo.Components.Service;

import java.util.List;

import com.example.demo.Components.Model.Employee;

public interface EmployeeService {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
    Employee readEmployee(Long id);
}
