import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { stringify } from '@angular/core/src/util';


@Injectable({
  providedIn: 'root'
})
export class FloorService {
  urls: string;
  constructor(private http: HttpClient) { }

  // floor1
  floor1() {
    return this.http.get('http://192.168.0.127/montviro/api/?mode=Bi5HcfAFuK8=&prop_reg_id=1&f_id=1');
  }
  //floor2
  floor2() {
    return this.http.get('http://192.168.0.127/montviro/api/?mode=Bi5HcfAFuK8=&prop_reg_id=1&f_id=2');
  }
  //floor3
  floor3() {
    return this.http.get('http://192.168.0.127/montviro/api/?mode=Bi5HcfAFuK8=&prop_reg_id=1&f_id=3');
  }
  //floor4
  floor4() {
    return this.http.get('http://192.168.0.127/montviro/api/?mode=Bi5HcfAFuK8=&prop_reg_id=1&f_id=4');
  }
  //floor5
  floor5() {
    return this.http.get('http://192.168.0.127/montviro/api/?mode=Bi5HcfAFuK8=&prop_reg_id=1&f_id=5');
  }
  propertyDetail(prop_id) {
    this.urls = 'http://192.168.0.127/montviro/api/?mode=4jqgaBByTNo=&prop_id=';

    console.log(this.urls + prop_id);
    return this.http.get(this.urls + prop_id)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);

      });
  }

}
