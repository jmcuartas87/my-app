import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  public listRestaurants: any;
  
  constructor() { }

  ngOnInit() {
    this.listRestaurants = [{
      name: 'Bouet',
      visited: true 
    }, {
      name: 'Begin',
      visited: false
    }];
  }

  public deleteRestaurant($event: any): void {
    this.listRestaurants.splice($event, 1);
  }

}
