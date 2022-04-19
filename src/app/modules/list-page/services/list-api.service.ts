import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class ListApiService {
  constructor(public httpClient: HttpClient) {}

  getUsers(start: number, limit: number): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}`
    );
  }
}
