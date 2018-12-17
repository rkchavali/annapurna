import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import {Item} from "../model/item";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getItems(){
    return this.httpClient.get<Item[]>(`../../assets/data/items.json`);
  }

  getCategories(){
    return this.httpClient.get<Category[]>(`../../assets/data/categories.json`);
  }    
  
  getSavedOrder() {
	  return localStorage.getItem("savedOrder");
  }
  
  getSavedorder() {
	  return "";
  }

}
