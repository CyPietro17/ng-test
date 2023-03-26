import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user!: User;
}
