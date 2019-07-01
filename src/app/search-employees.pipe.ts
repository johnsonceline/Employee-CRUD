import { employee } from './employees/model/employee';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'searchEmployees'
})

export class SearchEmployeesPipe implements PipeTransform {
  transform(value: Array<employee>, args?: string): any {
    if (!args) {
      return value;
    }
    args = args.toLowerCase();
    return value.filter(employee => {
      return employee.name.toLowerCase().includes(args);
    });
  }
}
