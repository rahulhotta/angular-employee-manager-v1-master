import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  apiUrl = "http://localhost:8000"
  employeeList: any = [
    {
      empId: '1',
      empName: 'rahul',
      empDOJ: '24-12-2023',
      empProject: 'unify',
      empImage: '',
    },
    {
      empId: '2',
      empName: 'rahul 1',
      empDOJ: '24-12-2023',
      empProject: 'unify',
      empImage: '',
    },
    {
      empId: '3',
      empName: 'rahul 2',
      empDOJ: '24-12-2023',
      empProject: 'unify',
      empImage: '',
    },
  ];
  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/view-all-students`);  
    // return this.employeeList;
  }

  addDataToEmpList(data: any):Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/add-student`,data)   
  }
  deleteDataFromEmpList(empId: any) :Observable<any[]> {
    // let index = this.employeeList.findIndex((emp: any) => {
    //   return emp.empId === empId;
    // });
    // this.employeeList.splice(index, 1);
    return this.http.delete<any[]>(`${this.apiUrl}/delete-student/${empId}`)
  }
  updateEmpList(){

  }
  editDataInEmpList(empId: any, empData: any):Observable<any[]>{
    // let index = this.employeeList.findIndex((emp: any) => {
    //   return emp.empId === empId;
    // });
    // this.employeeList[index] = empData
    return this.http.put<any[]>(`${this.apiUrl}/update-student/${empId}`,empData) ; 
  }
}
