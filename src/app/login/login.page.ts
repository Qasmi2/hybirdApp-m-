import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../app/detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_mobile: string;
  user_pass: string;
  mode: string = 'W9WqcA7U2KA=';

  constructor(public detail: DetailService) { }

  loginForm() {
    this.detail.login(this.user_mobile, this.user_pass, this.mode);
  }

  ngOnInit() {

  }

}
