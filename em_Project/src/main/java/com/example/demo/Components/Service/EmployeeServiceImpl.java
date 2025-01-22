package com.example.demo.Components.Service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Components.Entity.EmployeeEntity;
import com.example.demo.Components.Model.Employee;
import com.example.demo.Components.Repository.EmployeeRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public String createEmployee(Employee employee) {
        try {
            EmployeeEntity employeeEntity = new EmployeeEntity();
            BeanUtils.copyProperties(employee, employeeEntity);
            employeeRepository.save(employeeEntity);
            return "Saved Successfully";
        } catch (Exception e) {
            // Log the exception (use a logging framework such as SLF4J)
            // logger.error("Error occurred while saving employee", e);
            return "Error occurred: " + e.getMessage();
        }
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);

        return employee;
    
    }



    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for (EmployeeEntity employeeEntity : employeeEntities) {
            Employee employee = new Employee();
            // BeanUtils.copyProperties(employeeEntity, employee);    // for copy all at one time 
            employee.setId(employeeEntity.getId());
            employee.setName(employeeEntity.getName());
            employee.setEmail(employeeEntity.getEmail());
            employee.setPhone(employeeEntity.getPhone());

            employees.add(employee);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        if (employeeRepository.existsById(id))
        {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity existingEmployee = employeeRepository.findById(id).get();
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());
    
        employeeRepository.save(existingEmployee);
       return "Update Successfully";
    }

  



}


// // for update all at one time 

// @Override
// public String updateEmployee(Long id, Employee employee) {
//     Optional<EmployeeEntity> existingEmployeeOpt = employeeRepository.findById(id);
//     if (existingEmployeeOpt.isPresent()) {
//         EmployeeEntity existingEmployee = existingEmployeeOpt.get();
//         BeanUtils.copyProperties(employee, existingEmployee, "id"); // Avoid overwriting the ID
//         employeeRepository.save(existingEmployee);
//         return "Updated Successfully";
//     } else {
//         return "Employee not found";
//     }
// }
