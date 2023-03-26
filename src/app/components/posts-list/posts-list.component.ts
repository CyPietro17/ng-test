import { PostserviceService } from './../../services/postservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostserviceService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }

  onNewPost(post: Post) {
    this.postService.addPost(post);
  }

  upLikes(post: Post) {
    const index = this.posts.indexOf(post);
    if (index != -1) {
      this.posts[index].likes++;
    }
  }

  onNewComment(comment: PostComment) {
    this.postService.addComment(comment);
    console.log(comment);
  }
}
