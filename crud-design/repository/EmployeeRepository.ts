import { Employee } from "../models/Employee";
import { IRepository } from "./IRepository";

export class EmployeeRepository implements IRepository<Employee> {
  private employees: Array<Employee> = [
    new Employee("1", "Abhishek", ["C#", "TypeScript", "Python"]),
    new Employee("2", "Kranthi", ["NodeJS", "Express"]),
    new Employee("3", "Vivek", ["C#", "TypeScript", "React"]),
  ];

  getAll(): Array<Employee> {
    return this.employees;
  }

  create(employee: Employee): Employee {
    this.employees = [...this.employees, employee];
    return employee;
  }
}
