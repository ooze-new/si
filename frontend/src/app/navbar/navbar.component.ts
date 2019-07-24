import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  constructor (
    private _auth: AuthService,
    private _router: Router
  ) {}

  get authStateChange$(): BehaviorSubject<boolean> {
    return this._auth.authStateChange$;
  }

  ngOnInit() {
  }

  logout() {
    this._auth.logout();
    this._router.navigate(['login']);
  }
}
