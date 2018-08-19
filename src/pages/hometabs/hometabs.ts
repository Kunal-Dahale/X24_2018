import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the HometabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hometabs',
  templateUrl: 'hometabs.html'
})
export class HometabsPage {

  homeRoot = HomePage
  messageRoot = 'MessagePage'
  cartRoot = 'CartPage'
  chatbotRoot = 'ChatbotPage'


  constructor(public navCtrl: NavController) {}

}
