import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() openRecipeDetails = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test.',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  constructor() {

  }

  ngOnInit() {
  }

  recipeClicked(recipe) {
    this.openRecipeDetails.emit(recipe);
  }

}
