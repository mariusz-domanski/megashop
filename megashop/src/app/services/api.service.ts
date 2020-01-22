import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public menu: any = [
    { Id : 1, Name : 'Strona główna' },
    { Id : 2, Name : 'Soki owocowe' },
    { Id : 3, Name : 'Soki warzywne'},
    { Id : 4, Name : 'Soki mieszane'},
    { id : 5, Name : 'O nas'},
    { id : 6, Name : 'Polityka prywatności'},
    { id : 7, Name : 'Cennik dostaw'},
    { id : 8, Name : 'Kontakt'}
  ];

  constructor() { }
}
