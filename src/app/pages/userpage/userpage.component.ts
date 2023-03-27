import { UserserviceService } from './../../services/userservice.service';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
})
export class UserpageComponent {
  constructor(private userService: UserserviceService) {}

  user!: User;

  onNewUser(user: User) {
    this.userService.postUser(user).subscribe({
      next: (data: User) => {
        this.user = data;
        this.userService.addUser(data);
      },
      error: (error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Client Error: ${error.message}`;
        } else {
          errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert("C'è stato un errore con il server, riprova più tardi.");
        console.error(errorMessage, { error });
      },
    });
  }
}
