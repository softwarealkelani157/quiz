import { createAction, props } from '@ngrx/store';
import { User } from '../../api/models/user.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number }>()
);
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
