import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  selectedID: number;
  employee:employee;

  constructor(
    private activateRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getEmployeeById();
  }
  getEmployeeById() {
    this.employee = this.employeeService.getEmployeeById(this.selectedID);
    console.log(employee);
  }
  onSubmit(v) {
    this.employeeService.updatEmployee(v);
    this.router.navigate(["/"]);
  }
}