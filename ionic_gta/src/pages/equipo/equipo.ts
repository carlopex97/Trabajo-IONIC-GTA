import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the EquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {
  
  jugadores:any[] = []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }
}
