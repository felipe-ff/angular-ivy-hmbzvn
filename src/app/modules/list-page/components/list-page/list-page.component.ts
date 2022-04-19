import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IUser } from '../../interfaces/user.interface';
import { ListApiService } from '../../services/list-api.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  start = 0;
  increment = 2;
  users: IUser[] = [];

  constructor(public listApiService: ListApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.listApiService
      .getUsers(this.start, this.increment)
      .pipe(take(1))
      .subscribe((users) => {
        this.addUser(users);
        this.start += this.increment;
      });
  }

  clear(): void {
    this.users = [];
    this.start = 0;
  }

  private addUser(users: IUser[]): void {
    this.users = [...this.users, ...users];
  }
}
