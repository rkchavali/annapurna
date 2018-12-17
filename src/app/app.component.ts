import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {SharedService} from "./service/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Annapurna';

	isPath: string;

  constructor(private location: Location, private sharedService: SharedService) { 
  	//let arr = location.path().split("/");
  	//this.isPath = arr[1].split("?")[0];
	//this.sharedService.changePath('home');
  	console.log('isPath = ' + this.isPath);
  }
  
  ngOnInit() {
    this.sharedService.pathObj.subscribe(pathVal => this.isPath = pathVal);
  }  
}
