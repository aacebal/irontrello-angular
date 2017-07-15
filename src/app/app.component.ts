import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.session.checkLogin()
      .then((userInfo) => {
        this.router.navigate(['/lists']);
      })
      .catch(err => {
        this.router.navigate(['/'])
      })
  }
}
