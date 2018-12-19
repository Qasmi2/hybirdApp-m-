import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

})
export class AppComponent {
  profiling: any;
  rootPage: any = 'LoginPage';
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'YOUR CLIENTS',
      url: ''
    },
    {
      title: 'NOTIFICATIONS',
      url: ''
    },
    {
      title: 'SETTINGS',
      url: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage,

  ) {
    this.initializeApp();
    this.profile();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  profile() {
    this.storage.get('loginResponse').then((val) => {
      console.log('Your json is', val);
      this.profiling = val;
      console.log(this.profiling);

    });
  }
}
