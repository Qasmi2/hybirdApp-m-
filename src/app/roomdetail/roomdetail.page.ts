import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.page.html',
  styleUrls: ['./roomdetail.page.scss'],
})
export class RoomdetailPage implements OnInit {
  detail: any;
  constructor(public storage: Storage) { }

  getLocalStorage() {
    this.storage.get('my-json').then((val) => {
      console.log('Your json is', val);
      this.detail = val;
      for (let entry of this.detail) {
        console.log(entry);
      }
    });
  }

  ngOnInit() {
    this.getLocalStorage();
  }

}
