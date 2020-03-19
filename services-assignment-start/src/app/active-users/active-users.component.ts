import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private usersService: UsersService) {}

  users = this.usersService.activeUsers;

  onSetToInactive(id: number) {
    this.usersService.inactiveUsers.push(this.users[id]);
    this.users.splice(id, 1);
    // this.userSetToInactive.emit(id);
  }
}
