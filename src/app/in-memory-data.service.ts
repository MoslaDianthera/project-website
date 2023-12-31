import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ProductData =[
      { id:1, title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
      { id:2, title:"Mens Casual Premium Slim Fit T-Shirts ",price:22.3, image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
      { id:3, title:"Mens Cotton Jacket",price:55.99,image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
      { id:4, title:"Mens Casual Slim Fit",price:15.99,image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},
      { id:5, title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",price:695,image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
      { id:6, title:"Solid Gold Petite Micropave ",price:168,image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},
      { id:7, title:"White Gold Plated Princess",price:9.99,image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"},
      { id:8, title:"Pierced Owl Rose Gold Plated Stainless Steel Double",price:10.99,image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"},
      { id:9, title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",price:89,image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},
      { id:10, title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",price:109,image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"},
      { id:11, title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",price:109,image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"},
      { id:12, title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",price:114,image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"},
      { id:13, title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",price: 100,image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"}
    ]
    return {ProductData};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(ProductData: product[]): number {
    return ProductData.length > 0 ? Math.max(...ProductData.map(product => product.id)) + 1 : 1;
  }
}