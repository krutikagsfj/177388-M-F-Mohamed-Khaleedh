import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  gPrice: any;
  bal: any;
  msg1: any;
  msg2: any;
  name: any;
  constructor() { }

  ngOnInit() {
    this.gPrice = localStorage.getItem("gamePrice");
    this.name = localStorage.getItem("gameName");
    this.bal = 600 - this.gPrice;
    this.msg1 = ` Thank You for Playing ${this.name}! Your balance is Rs. ${this.bal}`;
    this.msg2 = `Thank You for using our Online Gaming Site.Insufficient balance to play ${this.name} Please Top-Up again!!`;
    return;

  }
}


