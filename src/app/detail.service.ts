import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { stringify } from '@angular/core/src/util';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })

};

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  urls: string = " http://192.168.0.127/montviro/api/ ";
  // loginData = {
  //   user_mobile: '456789',
  //   user_pass: 'ellight',
  //   mode: 'W9WqcA7U2KA%3D'
  // }

  user_mobile: string = '';
  user_pass: string = '';
  mode: string = 'W9WqcA7U2KA%3D';


  constructor(private http: HttpClient) { }
  // GET Requrests 
  // getDetail() {
  //   return this.http.get('http://192.168.0.127/montviro/api/');
  //     .subscribe(data => {
  //       console.log(data);
  //     }, error => {
  //       console.log(error);

  //     });
  //}

  //login
  login(user_mobile: string, user_pass: string, mode: string) {

    this.user_mobile = user_mobile;
    this.user_pass = user_pass;
    this.mode = mode;
    return this.http.get('http://192.168.0.127/montviro/api/?mode=W9WqcA7U2KA=&user_mobile=' + this.user_mobile + '&user_pass=' + this.user_pass);
    //   .subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);

    // });
  }

}