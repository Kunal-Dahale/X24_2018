import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HometabsPage } from '../hometabs/hometabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    console.log('signup SignupPage');
    this.navCtrl.push(HometabsPage);
  }
}
