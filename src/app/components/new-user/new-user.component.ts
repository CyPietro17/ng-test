import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  @Output() newUser = new EventEmitter<User>();

  factoryID = 33;

  userSign = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    this.newUser.emit(this.prepareRequest());
    this.userSign.reset();
  }

  prepareRequest(): User {
    return {
      id: ++this.factoryID,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      postsId: [],
    };
  }

  get firstName(): string {
    return this.userSign.get('firstName')?.value;
  }

  get lastName(): string {
    return this.userSign.get('lastName')?.value;
  }

  get username(): string {
    return this.userSign.get('username')?.value;
  }

  get email(): string {
    return this.userSign.get('email')?.value;
  }
}
