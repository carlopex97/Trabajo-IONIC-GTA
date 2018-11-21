import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users';
import { AngularFireAuth} from 'angularfire2/auth'
import {TabsPage} from '../tabs/tabs'
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AngularFireAuth]
})
export class LoginPage {

  user={} as User;

  constructor(
    private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  login(user: User){
    try{
    const result=this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    if(result){  
    this.navCtrl.setRoot(TabsPage);
  }
}
    catch(e){
      console.error(e);
    }
  }
  
}
