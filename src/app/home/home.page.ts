import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../app/detail.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any;
  constructor(public detail: DetailService, public storage: Storage) { }

  // getDetail(): void {
  //   this.detail.getDetail().subscribe(response => {
  //     this.products = response;
  //     //storage 
  //     let your_json_object = this.products;
  //     this.storage.set('my-json', your_json_object);
  //     this.storage.get('my-json').then((val) => {
  //       console.log('Your json is', val);
  //     });

  //   });
  // }
  // floor 1 
  // floor() {
  //   this.storage.get('my-json').then((val) => {
  //     for (let detail of val) {
  //       if (detail.floor_name == "First Floor") {
  //         console.log(detail);
  //         this.storage.set('floor1', detail);

  //       }
  //       if (detail.floor_name == "Second Floor") {
  //         this.storage.set('floor2', detail);
  //       }
  //       if (detail.floor_name == "Third Floor") {
  //         this.storage.set('floor3', detail);
  //       }
  //       if (detail.floor_name == "Fourth Floor") {
  //         this.storage.set('floor4', detail);
  //       }
  //       if (detail.floor_name == "Fifth Floor") {
  //         this.storage.set('floor5', detail);
  //       }
  //     }
  //   });
  // }




  ngOnInit() {
    //this.getDetail();
    //this.floor();
  }
}
