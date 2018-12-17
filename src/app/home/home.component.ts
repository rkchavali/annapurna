import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	imageArr: any[];

  constructor() { 
  }

  ngOnInit() {
  	
  	this.imageArr = ['../../assets/images/daal.jpg',
  					'../../assets/images/dokla.jpg',
  					'../../assets/images/idly.jpg',
  					'../../assets/images/naan.jpg',
  					'../../assets/images/daal-2.jpg',
  					'../../assets/images/sambar.jpg'
  					];
  	
  	
  }

}
