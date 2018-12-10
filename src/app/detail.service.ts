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

  constructor(private http: HttpClient) { }

  getDetail() {
    return this.http.get('http://192.168.0.127/montviro/api/')
    //     .subscribe(data => {
    //       console.log(data);
    //     }, error => {
    //       console.log(error);

    //     });
  }
}