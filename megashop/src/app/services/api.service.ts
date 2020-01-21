import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public menu: any = [
    {
      'Id' : 1,
      'Name' : 'Startowa',
    },
    {
      'Id' : 2,
      'Name' : 'Menu 1'
    },
    {
      'Id' : 3,
      'Name' : 'Menu 2'
    },
    {
      'Id': 4,
      'Name' : 'Menu 3'
    }
  ];

  constructor() { }
}
