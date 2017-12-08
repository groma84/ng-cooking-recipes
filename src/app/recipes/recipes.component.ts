import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  private showDetailsOfRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  openRecipeDetails(recipe) {
    this.showDetailsOfRecipe = recipe;
  }
}
