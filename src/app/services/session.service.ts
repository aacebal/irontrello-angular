import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: Http
  ) { }

  checkLogin() {
    return this.http.get('baseURL/checklogin')
      .toPromise()
      .then(res => res.json());
  }

}
