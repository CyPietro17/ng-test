import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
})
export class NewCommentComponent {
  @Output() shareComment = new EventEmitter<PostComment>();

  constructor(private userService: UserserviceService) {}

  users!: User[];
  @Input() post!: Post;

  ngOnInit(): void {
    this.users = this.userService.usersBlog();
  }

  newComment = new FormGroup({
    text: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.shareComment.emit(this.prepareRequest());
    console.log(this.prepareRequest());
  }

  prepareRequest(): PostComment {
    return {
      id: this.post.comments.length + 49,
      text: this.text,
      likes: 0,
      creator: this.creator,
      postId: this.post.id,
    };
  }

  get text(): string {
    return this.newComment.get('text')?.value;
  }

  get creator(): string {
    return this.newComment.get('creator')?.value;
  }
}
