import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor() {
    this.ingredients = [
      {
        name: 'tomatoes',
        amount: 5
      },
      {
        name: 'apples',
        amount: 10
      }
    ];
  }

  ngOnInit() {
  }

}
