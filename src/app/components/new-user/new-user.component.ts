import { UserserviceService } from './../../services/userservice.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  constructor(private userService: UserserviceService) {}

  @Output() newUser = new EventEmitter<User>();

  user!: User;

  userSign = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    this.newUser.emit(this.prepareRequest());
  }

  prepareRequest(): User {
    return {
      id: this.userService.getUsers().length + 1,
      username: this.username,
      email: this.email,
      postsId: [],
    };
  }

  get username(): string {
    return this.userSign.get('username')?.value;
  }

  get email(): string {
    return this.userSign.get('email')?.value;
  }
}
