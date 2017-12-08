import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showRecipes = true;

  switchShownContent(contentId: string) {
    switch (contentId) {
      case 'recipes':
        this.showRecipes = true;
        break;

      case 'shoppingList':
        this.showRecipes = false;
        break;

      default:
        this.showRecipes = true;
        break;
    }
  }
}
