import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalendarioPage} from '../calendario/calendario'
import {EquipoPage} from '../equipo/equipo'
import {JornadasPage} from '../jornadas/jornadas'
import {JugadoresPage} from '../jugadores/jugadores'

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.tab1=CalendarioPage;
  this.tab2=EquipoPage;
  this.tab3=JornadasPage;
  this.tab4=JugadoresPage;
  }

}
