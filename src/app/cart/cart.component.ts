import { Component, OnInit } from '@angular/core';

import {OrderDetail} from "../model/orderDetail";
import { Order } from '../model/order';
import { ItemDetails } from '../model/order';
import { Customer } from '../model/customer';
import {SharedService} from "../service/shared.service";

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


	orderDetails: any;

	order: Order;

	errorMessage: string;

	calOpen: boolean;

	minDate: Date;
	maxDate: Date;
  	bsConfig: Partial<BsDatepickerConfig>;

  	minTime: Date;
  	maxTime: Date;
	
	customerExists: boolean = false;
	newCustomer: boolean = false;
	isLoggedIn: boolean = false;
  accountCreated: boolean = false;
	
	customer: Customer;
	paymentSuccess: boolean = false;
	
	loginInfo: {
		username: string,
		password: string
	};

  constructor(private sharedService: SharedService) { 
	 this.sharedService.changePath('cart');
  }

  ngOnInit() {

  	this.loadOrderDetails();

  	this.order = new Order();

  	this.errorMessage = '';

  	this.calOpen = false;

  	let d = new Date();
  	this.minDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);

  	this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', dateInputFormat: 'MM/DD/YYYY'});
  	this.order.ccExpiryMonth = 0; 
  	this.order.ccExpiryYear = 0;
  }

  loadOrderDetails(): void {
    let od = localStorage.getItem("orderDetails");
    if(od != null) {
      this.orderDetails = JSON.parse(od);
    }
    else 
      this.orderDetails = [];  	
  }

  getOrderTotal() : number {
    let total = 0;
    for(let i=0;i<this.orderDetails.length; i++) {
      total = total + this.orderDetails[i].price;
    }    
    return total;  	
  }

  deleteItem(order : OrderDetail) : void {
	   this.orderDetails = this.orderDetails.filter(ord => ord.id !== order.id);
  	localStorage.setItem("orderDetails", JSON.stringify(this.orderDetails));
  }  

  initLogin() : void {
	  this.customerExists = true;
  }
  
  login() : void {
	  this.isLoggedIn = true;
	  // TODO - fetch customer info from service
	  
	  this.customer = new Customer(1, "Last", "First", "222-333-4444", "", "first@last.com", "", "123 Abcd Ln" , "Fairfax", "VA", "22033", "", "Active", null, null);
  }  
  
  processGuest() : void {
	  this.newCustomer = true;
	  this.isLoggedIn = true;
	  this.customer = new Customer(1, "Last", "First", "222-333-4444", "", "first@last.com", "", "123 Abcd Ln" , "Fairfax", "VA", "22033", "", "Active", null, null);
  }
  
  onSave() : void {
	  // TODO - submit order and customer details to service
	  
	  this.paymentSuccess = true;
  }

  createAccount() : void {
    // save password
    this.accountCreated = true;
  }
}
