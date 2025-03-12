import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private route: Router) {}
  goTo(to: string, id?: number | string) {
    if (id) this.route.navigate([to, id]);
    else this.route.navigate([to]);
  }
}
