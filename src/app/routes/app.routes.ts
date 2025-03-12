import { Routes } from '@angular/router';
import { UserList } from '../pages/user/user_list/userList.component';
import { HomeComponent } from '../pages/home/home.component';
import { UserDetails } from '../pages/user/user_details/userDetails.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'user-list', component: UserList },
  { path: 'user-details/:id', component: UserDetails },
];
