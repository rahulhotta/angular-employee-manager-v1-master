import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  public currentEmp = {
    empId: 0,
    empName: '',
    empDOJ: '',
    empProject: '',
    empImage: '',
  };
  @Input() modal: any;
  @Input('empId') id: any;
  @Input() formType: any;
  @Output() editedEmpDataEmitter = new EventEmitter<any>() ;

  editedEmployeeData = {
    empId: 0,
    empName: '',
    empDOJ: '',
    empProject: '',
    empImage: ''
  }
  
  ngOnInit(){
    if(this.formType === 'Edit'){
      let editedEmployee = this.employeeService.employeeList.find((emp: any) => {
        {
          return emp.empId === this.id;
        }
      });
      this.editedEmployeeData = {...editedEmployee};
    }
  }

  constructor(private employeeService: EmployeeService) {}
  addHandler() {
    this.currentEmp.empId = parseInt( new Date().getTime().toString());
    console.log(this.currentEmp);
    this.employeeService.addDataToEmpList(this.currentEmp).subscribe();
    this.employeeService.getAllEmployees().subscribe()

    this.modal.close('Save click');
  }
  editHandler() {
    this.modal.close('Save click');
    this.editedEmpDataEmitter.emit(this.editedEmployeeData);
  }

}
