import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private list: any;
  constructor() { }

  public getList() {
    this.list = [{
      name: 'Bouet',
      visited: true
    }, {
      name: 'Begin',
      visited: false
    }];

    return this.list;
  }

  public deleteItem(index: number): void {
    this.list.splice(index, 1);
  }
}
