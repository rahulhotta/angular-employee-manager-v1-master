import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: any = new User(
    1,
    'rahulhotta99@gmail.com',
    'password',
    '../../assets/Images/user/RahulPhoto1.png'
  );
  currentpage: any = "Home";
  title = 'angular-employee-manager-v1';
  isLoggedIn: any = true;
  
}
