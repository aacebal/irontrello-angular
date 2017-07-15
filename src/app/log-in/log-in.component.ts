import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formEmail: string;
  formPassword: string;

  errorMessage: string;

  constructor( private session: SessionService, private router: Router ) { }

  ngOnInit() {
  }

  submitLogin() {
    this.session.login(this.formEmail, this.formPassword)
      .then(() => {
        this.router.navigate(['/lists']);
      })
      .catch((errResponse) => {
        const apiInfo = errResponse.json();
        this.errorMessage = apiInfo.message;
      })
  }

}
