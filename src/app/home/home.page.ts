import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../app/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any;
  constructor(public detail: DetailService) { }
  getDetail(): void {
    this.detail.getDetail().subscribe(response => {
      console.log(response);
      this.products = response;

    });
  }


  ngOnInit() {
    this.getDetail();
  }
}
