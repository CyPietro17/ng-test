import { PostserviceService } from './services/postservice.service';
import { UserserviceService } from './services/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Test-angular';

  constructor(
    private userService: UserserviceService,
    private postService: PostserviceService
  ) {}
  ngOnInit(): void {
    this.userService.serviceOnInit();
    this.postService.InitPost();
  }
}
