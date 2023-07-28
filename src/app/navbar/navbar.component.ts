import { Component,Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() currentUser: any;
  @Output() currentPageEmmiter = new EventEmitter<string>();
  @Output() logOutEmmiter = new EventEmitter<any>()
  public currentPage: any = "Home";
  navLinkClickHandler(page:string){
    this.currentPage = page;
    this.currentPageEmmiter.emit(this.currentPage);
  }
  logOutHandler(){
    this.logOutEmmiter.emit(false)
  }
  constructor(private employeeService: EmployeeService){}
  
}
