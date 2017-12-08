import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  newIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
