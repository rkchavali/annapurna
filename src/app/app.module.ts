import { BrowserModule } from '@angular/platform-browser';
import {  NgModule, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

import {ItemsService} from "./service/items.service";
import {SharedService} from "./service/shared.service";
import {OrderService} from "./service/order.service";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrderComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
	MatRadioModule,
	MatCheckboxModule,
	MatTabsModule,
	BsDatepickerModule.forRoot(),
	TimepickerModule.forRoot(),
	CarouselModule.forRoot()
  ],
  providers: [ItemsService, SharedService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
