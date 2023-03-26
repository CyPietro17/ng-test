import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-comment-item]',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent {
  @Input() comment!: PostComment;

  upComment(comment: PostComment) {
    comment.likes++;
  }
}
