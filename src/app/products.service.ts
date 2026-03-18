import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    { id: 1111, name: 'Laptop', price: 1500, used: false },
    { id: 2222, name: 'Smartphone', price: 800, used: true },
    { id: 3333, name: 'Headphones', price: 200, used: false },
    { id: 4444, name: 'Keyboard', price: 100, used: true },
  ];

  constructor() { }
}
