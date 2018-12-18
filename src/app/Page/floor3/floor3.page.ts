import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FloorService } from '../../floor.service';

@Component({
  selector: 'app-floor3',
  templateUrl: './floor3.page.html',
  styleUrls: ['./floor3.page.scss'],
})
export class Floor3Page implements OnInit {

  floorThird: any;
  constructor(public storage: Storage, public floor1Service: FloorService) { }
  flool3fun() {
    this.floor1Service.floor3().subscribe(response => {
      this.floorThird = response;
      console.log(this.floorThird);
      //storage 
      let your_json_object = this.floorThird;
      this.storage.set('floorThird', your_json_object);
      this.storage.get('floorThird').then((val) => {
        console.log('Your json is', val);
      });

    });
  }

  ngOnInit() {
    this.flool3fun();
  }

}
