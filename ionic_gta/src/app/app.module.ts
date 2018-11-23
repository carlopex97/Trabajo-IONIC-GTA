import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth} from 'angularfire2/auth';
import { CalendarioPage } from '../pages/calendario/calendario';
import { EquipoPage } from '../pages/equipo/equipo';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { JornadasPage } from '../pages/jornadas/jornadas';
import { TabsPage } from '../pages/tabs/tabs';
import {NgCalendarModule} from 'ionic2-calendar';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CalendarioPage,
    EquipoPage,
    JugadoresPage,
    JornadasPage,
    TabsPage

  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CalendarioPage,
    EquipoPage,
    JugadoresPage,
    JornadasPage,
    TabsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
  ]
})
export class AppModule {}
