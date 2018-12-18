import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FloorService } from '../../floor.service';

@Component({
  selector: 'app-floor2',
  templateUrl: './floor2.page.html',
  styleUrls: ['./floor2.page.scss'],
})
export class Floor2Page implements OnInit {

  floorSecond: any;
  constructor(public storage: Storage, public floor1Service: FloorService) { }
  flool2fun() {
    this.floor1Service.floor2().subscribe(response => {
      this.floorSecond = response;
      console.log(this.floorSecond);
      //storage 
      let your_json_object = this.floorSecond;
      this.storage.set('floorSecond', your_json_object);
      this.storage.get('floorSecond').then((val) => {
        console.log('Your json is', val);
      });

    });
  }

  ngOnInit() {
    this.flool2fun();
  }

}
