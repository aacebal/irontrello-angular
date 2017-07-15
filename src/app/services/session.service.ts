import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  baseUrl: string = 'http://localhost:3000/api';

  constructor(
    private http: Http
  ) { }

  checkLogin() {
    return this.http.get(this.baseUrl + '/checklogin')
      .toPromise()
      .then(res => res.json());
  }

  login(email, password) {
    return this.http.post(
      this.baseUrl + '/login',
      {
        loginEmail: email,
        loginPassword: password
      }
    )
      .toPromise()
      .then(res => res.json())
  }


}
