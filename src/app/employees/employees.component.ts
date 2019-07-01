import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { employee } from './model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
employeeList:Array<employee>;
val: any;
  constructor(private employeeServices:EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
    console.log(this.employeeList);
    
  }

getEmployee(){
this.employeeList=this.employeeServices.getEmployees();
console.log(this.employeeList[4].gender);
}

onDelete(id) {
  this.employeeServices.delete(id);
}
}
