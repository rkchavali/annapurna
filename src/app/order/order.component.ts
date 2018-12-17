import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {OrderDetail} from "../model/orderDetail";

import {SharedService} from "../service/shared.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

	orderDetails: OrderDetail[];

	loginInfo: {
		username: string,
		password: string
	};
	isLoggedIn: boolean = false;
	otpSent: boolean = false;

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private router: Router) { 
	 this.sharedService.changePath('order');
  }

  ngOnInit() {
  	this.loginInfo = {
  		username: '',
  		password: ''
  	}
  }

  login() : void {
	  this.isLoggedIn = true;
	  // TODO - fetch saved order info from service
	  
	  let so = localStorage.getItem("savedOrder");
	  if(so != null) {
		  this.orderDetails = JSON.parse(so);
	  }
  }

  sendOTP() : void {
  	this.otpSent = true;
  }

  getOrderTotal() : number {
    let total = 0;
    for(let i=0;i<this.orderDetails.length; i++) {
      total = total + this.orderDetails[i].price;
    }    
    return total;
  }

  editOrder() : void {
  	localStorage.setItem("orderDetails", JSON.stringify(this.orderDetails));
  	this.router.navigate(['/menu']);
  }

  checkout() : void {
  	localStorage.setItem("orderDetails", JSON.stringify(this.orderDetails));
  	this.router.navigate(['/cart']);
  }

}
