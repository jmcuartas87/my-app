import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/shared/services/restaurant-services';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  public listRestaurants: any;
  
  constructor(
    private restaurantService: RestaurantService
  ) { }

  async ngOnInit() {
    this.listRestaurants = await this.restaurantService.getList();
  }

  public addRestaurant(): void {
  }

  public deleteRestaurant($event: any): void {
    this.restaurantService.deleteItem($event);
  }

}
