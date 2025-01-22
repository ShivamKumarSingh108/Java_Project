package com.example.demo.Components.Repository;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// @Repository
// public interface EmployeeRepository  extends JpaRepository<EmployeeEntity, Long>{
    
// }


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Components.Entity.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {

    // Custom query to find employees by name
    List<EmployeeEntity> findByName(String name);

    // Custom query to find employees by email
    List<EmployeeEntity> findByEmail(String email);
}




