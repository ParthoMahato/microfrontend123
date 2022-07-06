import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser, State } from './reducer.details';
// import * as fromApp from '../store/app.reducer';
// import * as LoginActions from '../login/store/login.actions';

@Component({
  selector: 'cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: boolean = false;
  errorMessage = null;
 constructor(private router: Router, private store: Store<State>) {}
  ngOnInit() {
    // this.store.select(selectUser).subscribe(user => {
    //   if (!!user) {
    //     this.loggedInUser = true;
    //   } else {
    //     this.loggedInUser = false;
    //   }
    // });
  }

  logout() {
    // this.store.dispatch(LoginActions.logout());
    // this.router.navigate(['./login']);
  }
}
