import { UserserviceService } from './../../services/userservice.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users: User[] = [];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.users = this.userService.usersBlog();
  }
}
