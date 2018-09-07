import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from './User';
/*
  Generated class for the GithubUsersServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubUsersServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GithubUsersServiceProvider Provider');
  }
  getUsers(): Observable<User[]> {
    return this.http.get('https://api.github.com/users').map(res => <Array<User>>res);
  }

}
