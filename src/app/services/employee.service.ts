import { employee } from './../employees/model/employee';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  
  employee: Array<employee> = [
    
  {
    id: 1,
    name: "Ruben Ammann",
    image:"https://www.lifestyleblog.it/wp-content/uploads/2017/03/female1-512.png",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "female",
  },

  {
    id: 2,
    name: "Rocio Daughtridge",
    image:"https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170801154/83216759-man-employee-face-person-character-work-vector-illustration.jpg",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "male",
  },

  {
    id: 3,
    name: "Marcella Westlake",
    image:"https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170801158/83216763-woman-face-employee-worker-person-character-vector-illustration.jpg",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "female",
  },

  {
    id: 4,
    name: "Meghann Besse",
    image:"https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170801159/83216764-cara-de-mujer-empleado-trabajador-persona-car%C3%A1cter-ilustraci%C3%B3n-vectorial.jpg",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "female",
  },

  {
    id: 5,
    name: "Rodger Sosebee",
    image:"https://as1.ftcdn.net/jpg/01/66/39/00/500_F_166390090_tIzM0szEtZ6yxH6ldY7dW0aK4awPjTFS.jpg",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "male",
  },

  {
    id: 6,
    name: "France Pearl",
    image:"https://cdn4.iconfinder.com/data/icons/businessman-face-expressions-avatars-black/22/1-512.png",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "male",
  },

  {
    id: 7,
    name: "Berna Starnes",
    image:"https://st2.depositphotos.com/1007566/11553/v/950/depositphotos_115537092-stock-illustration-call-center-employee-isolated-icon.jpg",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "female",
  },

  {
    id: 8,
    name: "Marylou Fedor",
    image:"https://previews.123rf.com/images/yupiramos/yupiramos1808/yupiramos180804559/112384706-business-woman-employee-portrait-character-vector-illustration.jpg",
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    gender: "female",
  },

]
  constructor() { 
  
  }

  getEmployees(): Array<employee>{
    return this.employee;
  }

  addEmployee(v: any): any {
    this.employee.push(v);
  }
  delete(id: any): any {
    this.employee.map((employee, index) => {
      if (employee.id === id) {
        this.employee.splice(index, 1);
      }
    });
  }
  getEmployeeById(id: number) {
    let tempEmployee: employee;
    this.employee.map(a => {
      if (a.id == id) {
        tempEmployee = a;
      }
    });
    return tempEmployee;
  }
  updatEmployee(employee: employee) {
    this.employee.map((a, index) => {
      if (a.id === employee.id) {
        a.name = employee.name;
        a.description = employee.description;
        a.image = employee.image;
      }
    });
  }
}
