import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { LoginPage } from '../pages/login/login';
// import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public afAuth: AngularFireAuth
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.checkAuthState();
    });
  }
  //essa define qual a pagina inicial
  // por padrão ela subscreve em authState pra quendo ele resolver checar se res retorna alguma coisa. Caso sim: HomePage, caso não: LoginPage
  checkAuthState() {
    this.afAuth.authState.subscribe(res => {
      // if (res) {
      this.rootPage = WelcomePage;

      // } else {
      //   this.rootPage = LoginPage;
      // }
    });
  }
}
