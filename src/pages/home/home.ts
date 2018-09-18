import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SingInPage } from '../singin/singin';
import { LogInPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  singin(){
    this.navCtrl.push(SingInPage);
  }
  login() {
    this.navCtrl.push(LogInPage);
  }
  
}