import { PostserviceService } from './../../services/postservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private postService: PostserviceService) {}

  onNewPost(post: Post) {
    this.postService.addPost(post);
  }
}
