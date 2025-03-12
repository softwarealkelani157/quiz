import { createReducer, on } from '@ngrx/store';
import { User } from '../../api/models/user.model';
import { loadUsersSuccess } from './user.actions';

export const initialState: User[] = [];

const _userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => {
    return [...users];
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
