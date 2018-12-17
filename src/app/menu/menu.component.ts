import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import {ItemsService} from "../service/items.service";
import {Item} from "../model/item";
import {Category} from "../model/category";
import {OrderDetail} from "../model/orderDetail";
import {Customer} from "../model/customer";
import {SharedService} from "../service/shared.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  	items: Item[];
  	categories: Category[];
  	status: any;
  	orderDetails: OrderDetail[];

  	selItem: Item;
    customer: Customer;

  	currentItem: number = 0;
  	currentCat: number = 0;
    saveOrderMsg: string;

    constructor(private formBuilder:FormBuilder, private itemsService: ItemsService, private sharedService: SharedService) { 
  	 this.sharedService.changePath('menu');
    }

  ngOnInit() {
  	this.getItems();
  	this.getCategories();

  	this.orderDetails = [];
    this.customer = new Customer();
  	this.status = {
  		open: true
  	}

    this.findOrderDetails();
  }

  retrieveSavedOrder() : void {
	  let so = this.itemsService.getSavedorder();
	  if(so != null) {
		  this.orderDetails = JSON.parse(so);
	  }
  }

  findOrderDetails() : void {
    let od = localStorage.getItem("orderDetails");
    if(od != null) {
      this.orderDetails = JSON.parse(od);
    }
    else 
      this.orderDetails = [];
  }

  getItems() : void {
  	this.itemsService.getItems()
      .subscribe( data => {
        this.items = data;
        this.selItem = this.items[0];
      });  	
  }

  getCategories() : void {
  	this.itemsService.getCategories()
      .subscribe( data => {
        this.categories = data;
      });  	
  }  

  setSelectedItem(item) : void {
  	this.selItem = item;
  }

  calCurrentCat(itemIdx) : void {
  	let val = 0;
  	for(let i = 0; i<this.categories.length; i++) {
        if(this.categories[i].categoryId <= itemIdx) {
        	val++;
        }
    }
    this.currentCat = val;
  }

  addToCart(category) : void {
	  
	  console.log(category.smallSelected + ', ' + category.mediumSelected + ', ' + category.largeSelected);

	 let tempOrderDetails = [];
	 
  	for(let i=0;i<this.orderDetails.length; i++) {
  		if(category.id != this.orderDetails[i].id) {
			   tempOrderDetails.push(this.orderDetails[i]);
      }
  	}
	this.orderDetails = tempOrderDetails;
	tempOrderDetails = [];
	
	if(category.smallSelected && category.smallQuantity ) {
		let smallOrder = new OrderDetail;
		smallOrder.quantity = category.smallQuantity;
		smallOrder.id = category.id;
		smallOrder.groupid = category.categoryId;
		smallOrder.itemName = category.itemName;
		smallOrder.minQuantity = 1;		
      	smallOrder.price = category.smallPrice * category.smallQuantity;
  		smallOrder.description = category.description + ' (Small)';
		this.orderDetails.push(smallOrder);
	}
	if(category.mediumSelected && category.mediumQuantity) {
		let mediumOrder = new OrderDetail;
		mediumOrder.quantity = category.mediumQuantity;
		mediumOrder.id = category.id;
		mediumOrder.groupid = category.categoryId;
		mediumOrder.itemName = category.itemName;
		mediumOrder.minQuantity = 1;		
      	mediumOrder.price = category.mediumPrice * category.mediumQuantity;
  		mediumOrder.description = category.description + ' (Medium)';	
		this.orderDetails.push(mediumOrder);
	}	
	if(category.largeSelected && category.largeQuantity) {
		let largeOrder = new OrderDetail;
		largeOrder.quantity = category.largeQuantity;
		largeOrder.id = category.id;
		largeOrder.groupid = category.categoryId;
		largeOrder.itemName = category.itemName;
		largeOrder.minQuantity = 1;		
      	largeOrder.price = category.largePrice * category.largeQuantity;
  		largeOrder.description = category.description + ' (Large)';		
		this.orderDetails.push(largeOrder);
	}

    localStorage.setItem("orderDetails", JSON.stringify(this.orderDetails));
	
    console.log('this.orderDetails = ' + this.orderDetails);

  }
  
  clearOrder() : void {
	  this.orderDetails = [];
	  localStorage.setItem("orderDetails", JSON.stringify(this.orderDetails));
  }
  
  saveOrder() : void {
	  localStorage.setItem("savedOrder", JSON.stringify(this.orderDetails));
    this.saveOrderMsg = "Order saved!";
  }
  
  deleteItem(order : OrderDetail) : void {
		this.orderDetails = this.orderDetails.filter(ord => ord.id !== order.id);
		localStorage.setItem("orderDetails", JSON.stringify(this.orderDetails));
  }

  getOrderTotal() : number {
    let total = 0;
    for(let i=0;i<this.orderDetails.length; i++) {
      total = total + this.orderDetails[i].price;
    }    
    return total;
  }
  
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 49 || charCode > 57)) {
      return false;
    }
    return true;
  }  

}
