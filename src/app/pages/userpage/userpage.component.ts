import { UserserviceService } from './../../services/userservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
})
export class UserpageComponent {
  constructor(private userService: UserserviceService) {}

  onNewUser(user: User) {
    this.userService.addUser(user);
  }
}
