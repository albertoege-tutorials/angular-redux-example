import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoginAction, LoginActionTypes } from './login-state-management/actions';
import { LoginState, UserCredentials } from './login-state-management/models';
import { AppState } from '../app-state-management/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  newUserCredential: UserCredentials = { username: '', password: '' };
  userCredentials$: Observable<UserCredentials>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.store
      .select((state) => state.login.credentials)
      .subscribe((userCredentials) => (this.newUserCredential = { ...userCredentials }));
  }

  login() {
    if (this.newUserCredential) {
      this.store.dispatch(new LoginAction(this.newUserCredential));
    }
    // TODO: this.router.navigate(['todo']);
  }
}
