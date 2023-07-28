import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-pop-up-modal',
  templateUrl: './pop-up-modal.component.html',
  styleUrls: ['./pop-up-modal.component.scss'],
})
export class PopUpModalComponent {
  @Input() formType: any;
  @Input() empId: any;
  @Output() editedDataEventEmmiter = new EventEmitter<any>();

  closeResult = '';
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  constructor(
    private modalService: NgbModal,
    private employeeService: EmployeeService
  ) {}

  open(content: any) {
    console.log("The emp id in pop-up-modal is: ",this.empId)
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  catchEditedData(event:any){
    this.editedDataEventEmmiter.emit(event)
  }
  // form ts

 
}
