import { Injectable } from '@angular/core';
import { StorageService } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private list: any;

  constructor(private storageService: StorageService) { }

  public async getList() {
    this.list = await this.storageService.getItems('restList.txt');
    return this.list;
  }

  public setList() {
    this.list = [{
      name: 'Bouet',
      visited: true
    }, {
      name: 'Begin',
      visited: false
    }];

    this.storageService.setItems('restList.txt', JSON.stringify(this.list));
  }

  public deleteItem(index: number): void {
    this.list.splice(index, 1);
    this.setList();
  }
}
