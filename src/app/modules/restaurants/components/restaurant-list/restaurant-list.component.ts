import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  @Input() listRestaurants: any;
  @Output() deleteRestaurant = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  public setVisited(index: number, visited: boolean): void {
    this.listRestaurants[index].visited = !visited;
  }

  public removeRestaurant(index: number): void {
    this.deleteRestaurant.emit(index);
  }

  public getIcon(visited: boolean): string {
    return visited ? 'checkmark-circle' : 'checkmark-circle-outline';
  }

}
