import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';
import { RestaurantListComponent } from '../../components/restaurant-list/restaurant-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsPageRoutingModule,
  ],
  declarations: [
    RestaurantsPage,
    RestaurantListComponent
  ]
})
export class RestaurantsPageModule {}
