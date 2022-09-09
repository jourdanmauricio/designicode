import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schemas/apiClass.class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { catchError, map, Observable } from 'rxjs';

export interface RespUser {
  error: boolean;
  msg: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiClass {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  /**
   * Get all users from api
   * @returns list of users
   */
  getAllUsers(): Observable<RespUser> {
    const response = { error: false, msg: '', data: [] as ICardUser[] };
    return this.http.get<ICardUser[]>(`${this.url}/users`).pipe(
      map((r) => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }

  /**
   * Get user by id
   * @param id
   * @returns user
   */

  getUserById(id: number): Observable<RespUser> {
    const response = { error: false, msg: '', data: {} as ICardUser };
    return this.http.get<ICardUser>(`${this.url}/users/${id}`).pipe(
      map((r) => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }
}
