import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FloorService } from '../../floor.service';

@Component({
  selector: 'app-floor5',
  templateUrl: './floor5.page.html',
  styleUrls: ['./floor5.page.scss'],
})
export class Floor5Page implements OnInit {

  floorFive: any;
  constructor(public storage: Storage, public floor1Service: FloorService) { }
  flool5fun() {
    this.floor1Service.floor5().subscribe(response => {
      this.floorFive = response;
      console.log(this.floorFive);
      //storage 
      let your_json_object = this.floorFive;
      this.storage.set('floorFive', your_json_object);
      this.storage.get('floorFive').then((val) => {
        console.log('Your json is', val);
      });

    });
  }

  ngOnInit() {
    this.flool5fun();
  }

}
