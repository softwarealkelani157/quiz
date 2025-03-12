import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../common/shared.module';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../../../api/models/user.model';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { loadUsers } from '../../../state_management/user/user.actions';
import { MaterialModule } from '../../../common/material.module';
import { RouteService } from '../../../routes/route.service';

@Component({
  selector: 'user-list',
  imports: [SharedModule, MatTableModule, MatPaginator, MaterialModule], // Corrected "styleUrl" to "styleUrls"
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.scss'],
})
export class UserList implements OnInit {
  constructor(
    private store: Store<{ users: User[] }>,
    private routeService: RouteService
  ) {}
  dataSource = new MatTableDataSource<User>();
  users$!: Observable<User[]>;
  displayedColumns: string[] = [
    'avatar',
    'first_name',
    'last_name',
    'email',
    'actions',
  ];

  isNotEmpty() {
    let result;
    this.users$
      .pipe(map((data) => data?.length !== 0))
      .subscribe((re) => (result = re));
    return result;
  }
  ngOnInit() {
    this.store.dispatch(loadUsers({ page: 1 }));
    this.users$ = this.store.select((state) => {
      return state.users;
    });
    this.users$.subscribe((users) => {
      this.dataSource.data = users;
    });
  }
  onPageChange(event: any) {
    this.store.dispatch(
      loadUsers({ page: event.previousPageIndex === 0 ? 2 : 1 })
    );
  }
  goToUserDetails(id: number) {
    this.routeService.goTo('/user-details', id);
  }
}
