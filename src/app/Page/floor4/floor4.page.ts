import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FloorService } from '../../floor.service';

@Component({
  selector: 'app-floor4',
  templateUrl: './floor4.page.html',
  styleUrls: ['./floor4.page.scss'],
})
export class Floor4Page implements OnInit {

  floorFour: any;
  constructor(public storage: Storage, public floor1Service: FloorService) { }
  flool4fun() {
    this.floor1Service.floor4().subscribe(response => {
      this.floorFour = response;
      console.log(this.floorFour);
      //storage 
      let your_json_object = this.floorFour;
      this.storage.set('floorFour', your_json_object);
      this.storage.get('floorFour').then((val) => {
        console.log('Your json is', val);
      });

    });
  }

  ngOnInit() {
    this.flool4fun();
  }

}
