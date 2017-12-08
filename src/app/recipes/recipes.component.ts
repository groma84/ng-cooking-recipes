import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  private showDetailsOfRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => this.showDetailsOfRecipe = recipe);
  }
}
