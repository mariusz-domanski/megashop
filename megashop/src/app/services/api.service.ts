import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public menu: any = [
    { Id : 1, Name : 'Strona główna', Link: '/' },
    { Id : 2, Name : 'Soki owocowe', Link: 'soki-owocowe' },
    { Id : 3, Name : 'Soki warzywne', Link: 'soki-warzywne'},
    { Id : 4, Name : 'Soki mieszane', Link: 'soki-mieszane'},
    { id : 5, Name : 'O nas', Link: 'article/o-nas'},
    { id : 6, Name : 'Polityka prywatności', Link: 'article/polityka-prywatnosci'},
    { id : 7, Name : 'Cennik dostaw', Link: 'article/cennik-dostaw'},
    { id : 8, Name : 'Kontakt', Link: 'article/kontakt'}
  ];

  constructor() { }
}
