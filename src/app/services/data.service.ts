import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getNumbers(): number {
    let min = Math.ceil(0);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
