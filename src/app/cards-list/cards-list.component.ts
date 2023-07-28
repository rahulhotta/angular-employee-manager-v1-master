import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  constructor(private employeeService: EmployeeService){}
  empList: any = this.employeeService.getAllEmployees();
  editHandler(id:any,data:any){
    this.employeeService.editDataInEmpList(id,data);
  }
  deleteHandler(id:any){
    this.employeeService.deleteDataFromEmpList(id);
  }
}
