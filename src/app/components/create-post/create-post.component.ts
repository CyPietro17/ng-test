import { UserserviceService } from 'src/app/services/userservice.service';
import { PostserviceService } from './../../services/postservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  @Output() sharePost = new EventEmitter<Post>();

  newPost = new FormGroup({
    text: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
  });

  users!: User[];

  constructor(
    private postService: PostserviceService,
    private usersService: UserserviceService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.usersBlog();
  }

  onSubmit() {
    this.sharePost.emit(this.prepareRequest());
    this.newPost.reset();
  }

  prepareRequest(): Post {
    return {
      id: this.postService.getPost().length + 100,
      text: this.text,
      likes: 0,
      comments: [],
      creator: this.creator,
    };
  }

  get text(): string {
    return this.newPost.get('text')?.value;
  }

  get creator(): string {
    return this.newPost.get('creator')?.value;
  }
}
