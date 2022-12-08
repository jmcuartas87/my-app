import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public async setItems(key: string, value: any): Promise<void> {
    await Filesystem.writeFile({
      path: key,
      data: value,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }

  public async getItems(key: string): Promise<any> {
    try {
      const { data } = await Filesystem.readFile({
        path: key,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      
      return JSON.parse(data);
    } catch (err: any) {
      console.error(err.message);
      this.setItems(key, JSON.stringify([]));
    } 
  }
}
