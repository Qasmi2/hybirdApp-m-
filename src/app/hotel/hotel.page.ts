import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
  detail: any;
  constructor(public storage: Storage) { }

  getLocalStorage() {
    this.storage.get('my-json').then((val) => {
      console.log('Your json is', val);
      this.detail = val;
    });
  }
  floor1() {

  }


  ngOnInit() {
    this.getLocalStorage();
  }

}
