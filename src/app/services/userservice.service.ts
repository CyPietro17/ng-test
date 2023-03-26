import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() {}

  users: User[] = [];

  InitUsers() {
    let u: User;
    u = {
      id: 1,
      username: 'petrov17',
      email: 'pietro@angular.js',
      postsId: [100, 102],
    };
    this.users.push(u);
    u = {
      id: 2,
      username: 'paky12',
      email: 'pasquale@angular.js',
      postsId: [101, 103],
    };
    this.users.push(u);
    u = {
      id: 3,
      username: 'XiU',
      email: 'alexiu@angular.js',
      postsId: [104],
    };
    this.users.push(u);
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
