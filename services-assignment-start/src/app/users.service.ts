import { Injectable, OnInit, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  // activeUsersUpdated = new EventEmitter<string[]>();

  // TODO: Manage user arrays globally

  // constructor() {
  //   this.activeUsersUpdated.emit(this.activeUsers);
  // }

  // TODO: Switch users between active and inactive
}
