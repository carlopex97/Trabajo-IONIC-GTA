import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {CalendarioPage} from '../calendario/calendario'
import {EquipoPage} from '../equipo/equipo'
import {JornadasPage} from '../jornadas/jornadas'
import {JugadoresPage} from '../jugadores/jugadores'



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }
  navegarCalendario(){
    this.navCtrl.push(CalendarioPage);
  }
  navegarEquipo(){
    this.navCtrl.push(EquipoPage);
  }
  navegarJornadas(){
    this.navCtrl.push(JornadasPage);
  }
  navegarJugadores(){
    this.navCtrl.push(JugadoresPage);

   }
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({      
      message:"Welcome to ${APP_NAME}, ${data,email}",
      duration: 3000
    }).present();
    
  }
else{
  this.toast.create({      
    message:"Could not fin authentications details",
    duration: 3000
  }).present();
}});
  }

}
