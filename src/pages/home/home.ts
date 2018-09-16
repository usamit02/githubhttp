import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubUsersService } from '../../providers/github-users-service/github-users-service';
import { User } from '../../providers/github-users-service/User';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
  constructor(public navCtrl: NavController, private githubUsersSevice: GithubUsersService) {
    githubUsersSevice.getUsers()
      .subscribe(users => {
        this.users = users;
      },
        err => console.log(err),
        () => { });
  }
}
