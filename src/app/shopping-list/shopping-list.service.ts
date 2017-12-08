import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Injectable()
export class ShoppingListService {

  shoppingListChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() {
  }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingListChanged.emit(this.ingredients);
  }

  getList() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingListChanged.emit(this.ingredients);
  }
}
