import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'fitness-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent{

    constructor(private router: Router) { }

    gotoDetail(): void {
    this.router.navigate(['/detail']);
  }

}

