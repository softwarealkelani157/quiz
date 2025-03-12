import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../api/models/user.model';

@Injectable()
export class UserEffects {
  loadData$;

  constructor(private actions$: Actions, private http: HttpClient) {
    this.loadData$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadUsers),
        mergeMap((payload) =>
          this.http
            .get<{ data: User[] }>(
              `https://reqres.in/api/users?page=${payload.page}`
            )
            .pipe(
              map((response) => {
                return loadUsersSuccess({ users: response.data });
              }),
              catchError((error) => of(loadUsersFailure({ error })))
            )
        )
      );
    });
  }
}
