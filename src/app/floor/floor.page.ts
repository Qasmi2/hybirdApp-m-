import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.page.html',
  styleUrls: ['./floor.page.scss'],
})
export class FloorPage implements OnInit {

  floordetail = new Array();

  constructor(public storage: Storage) { }

  floor1() {
    this.storage.get('my-json').then((val) => {
      var i = 0;
      for (let detail of val) {
        if (detail.floor_name == "Fifth Floor") {
          this.floordetail[i] = detail;
          i = i + 1;
        }
      }
    });
    console.log(this.floordetail);
  }


  ngOnInit() {
    this.floor1();
  }

}
