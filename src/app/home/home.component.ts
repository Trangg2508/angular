import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Trang';
  public age = 21;
  public fruits = ['Apple', 'Grapes', 'Orange', 'Watermelon', 'Guava', 'Papaya', 'Durian'];
  public fruit2 = [
    { name: 'Apple', price: 12, sale: true },
    { name: 'Banana', price: 10, sale: false },
    { name: 'Grapes', price: -5, sale: true }
  ];

  constructor() { };

  public ngOnInit(): void {
    console.log('Fruit = ', this.fruits);
  }


}
