import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  /* onNewUser(user: User) {
    this.userService.addUser(user);
  } */
}
