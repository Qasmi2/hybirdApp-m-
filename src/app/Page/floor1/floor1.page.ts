import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FloorService } from '../../floor.service';


@Component({
  selector: 'app-floor1',
  templateUrl: './floor1.page.html',
  styleUrls: ['./floor1.page.scss'],
})
export class Floor1Page implements OnInit {

  floorfirst: any;
  prop_id: any;
  constructor(public storage: Storage, public floor1Service: FloorService) { }

  floor1fun(): void {
    this.floor1Service.floor1().subscribe(response => {
      this.floorfirst = response;
      console.log(this.floorfirst);
      //storage 
      let your_json_object = this.floorfirst;
      this.storage.set('floorfirst', your_json_object);
      this.storage.get('floorfirst').then((val) => {
        console.log('Your json is', val);
      });

    });

  }
  propertyDetail(): void {

    this.floor1Service.propertyDetail(211);

  }

  ngOnInit() {
    this.floor1fun();
    this.propertyDetail();
  }

}
