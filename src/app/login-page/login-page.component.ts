import { Component } from '@angular/core';
import { User } from '../user';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  // standalone: true,
})
export class LoginPageComponent {
  @Output() currentUserEvent = new EventEmitter<any>();
  @Output() isLoggedInEvent = new EventEmitter<any>();
  rahul = new User(
    1,
    'rahulhotta99@gmail.com',
    'password',
    '../../assets/Images/user/RahulPhoto1.png'
  )
  voona = new User(
    1,
    'voonaReshmanth@gmail.com',
    'password1',
    '../../assets/Images/user/VoonaPhoto1.png'
  )
  ash = new User(
    1,
    'asutoshDora@gmail.com',
    'password2',
    '../../assets/Images/user/AsutoshPhoto1.png'
  )
  currentUser: any;
  userCredList = [
    this.rahul,
    this.voona,
    this.ash,
  ];

  public loginErrorMessage: any = "";
  public currentUserEmail: any = '';
  public currentUserPassword: any = '';

  private loginUser() {
    this.userCredList.every(user => {
      if(user.email === this.currentUserEmail && user.password === this.currentUserPassword){
        this.userLoginStatus = true;
        this.currentUser = user;
        this.currentUserEvent.emit(this.currentUser);
        this.isLoggedInEvent.emit(true)
        return
      }
      this.userLoginStatus = false
      this.loginErrorMessage="Invalid Email or Password!!"
    });
  }
  userLoginStatus: any = false ;
  loginFormSubmitHandler(event: any) {
    event.preventDefault();
    console.log(
      `current user email: ${this.currentUserEmail} \n current user Password: ${this.currentUserPassword}`
    );
    this.loginUser();
  }
}
