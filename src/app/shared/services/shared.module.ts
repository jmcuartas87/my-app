import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from './restaurant-services';
import { StorageService } from './storage';

const modules = [
  CommonModule
];

const providers = [
  RestaurantService,
  StorageService
];  

@NgModule({
  imports: [...modules],
  providers: [...providers]
})
export class SharedModule { }
