import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: any = {};

  errorMessage: string;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  submitSignup() {
    this.session.signup(this.newUser)
      .then(() => {
        this.router.navigate(['/lists'])
      })
      .catch((errResponse) => {
        const apiInfo = errResponse.json();
        this.errorMessage = apiInfo.message;
      })
  }

}
