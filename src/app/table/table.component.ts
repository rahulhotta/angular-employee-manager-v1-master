import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  constructor(private employeeService: EmployeeService) {}
  allEmployees: any = [];
  ngOnInit() {
    console.log('All employees are', this.allEmployees);
    this.employeeService.getAllEmployees().subscribe((res) => {
      console.log(res);
      this.allEmployees = res;
    });
  }
  deleteHandler(id: any) {
    this.employeeService.deleteDataFromEmpList(id).subscribe();
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.allEmployees = res;
    });
  }
  editHandler(id: any, editedData: any) {
    this.employeeService.editDataInEmpList(id, editedData).subscribe();
  }
}
