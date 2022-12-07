import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from './restaurant-services';

const modules = [
  CommonModule
];

const providers = [
  RestaurantService
];  

@NgModule({
  imports: [...modules],
  providers: [...providers]
})
export class SharedModule { }
