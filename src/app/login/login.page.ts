import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../app/detail.service';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../app/home/home.page';
import { Routes, RouterModule } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_mobile: string;
  user_pass: string;
  mode: string = 'W9WqcA7U2KA=';
  respons: any;
  obj: any;
  constructor(public detail: DetailService, public navCtrl: NavController, public alertController: AlertController, public storage: Storage) { }

  loginForm() {
    this.detail.login(this.user_mobile, this.user_pass, this.mode)
      .subscribe(data => {
        console.log(data);
        this.respons = data;

        if (this.respons[0]['login_validation'] == 'true') {
          this.storage.set('acc_token', this.respons[0]['acc_token']);
          this.storage.set('loginResponse', this.respons);
          this.presentAlert();
        }
        if (this.respons[0]['login_validation'] == 'false') {
          this.presentAlertfailed();
        }
        // else {
        //   this.presentAlertError();
        // }
        // console.log(this.respons[0]['login_validation']);
      }, error => {
        console.log(error);
        this.presentAlertError();
      });
  }
  // login successful and go to home screen 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'login',
      subHeader: 'Message :',
      message: 'Successful login',
      buttons: ['OK']
    });

    await alert.present();
    this.navCtrl.navigateForward('/home');
    console.log(this.respons);
  }
  //login failed and show message 
  async presentAlertfailed() {
    const alert = await this.alertController.create({
      header: 'login',
      subHeader: 'Message :',
      message: 'mobile number or password is wrong  or something wrong ',
      buttons: ['OK']
    });

    await alert.present();
  }
  //login error
  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'login',
      subHeader: 'Message :',
      message: 'some erro occur ',
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {

  }

}
