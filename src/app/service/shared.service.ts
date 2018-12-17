import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

	pathObj = new BehaviorSubject("home");
	curPath = this.pathObj.asObservable();
	
  constructor() { }
  
  changePath(pathVal: string) : void {
	  this.pathObj.next(pathVal);
  }

}