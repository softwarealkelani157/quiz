import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../api/models/user.model';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../common/material.module';
import { RouteService } from '../../../routes/route.service';
@Component({
  selector: 'user-details',
  imports: [FormsModule, MatCardModule, CommonModule, MaterialModule], // Corrected "styleUrl" to "styleUrls"
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.scss'],
})
export class UserDetails {
  user!: User;
  constructor(
    private route: ActivatedRoute,
    http: HttpClient,
    private routeService: RouteService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    http
      .get<{ data: User }>(`https://reqres.in/api/users/${id}`)
      .subscribe((data) => {
        this.user = data.data;
      });
  }
  goToUsers() {
    this.routeService.goTo('/user-list');
  }
}
