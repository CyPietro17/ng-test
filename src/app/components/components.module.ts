import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserItemComponent,
    NewUserComponent,
    CreatePostComponent,
    PostsListComponent,
    NewCommentComponent,
    CommentItemComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    UsersListComponent,
    UserItemComponent,
    NewUserComponent,
    CreatePostComponent,
    PostsListComponent,
  ],
})
export class ComponentsModule {}
