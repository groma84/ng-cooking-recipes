import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() switchShownContent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
    this.switchShownContent.emit('recipes');
  }

  showShoppingList() {
    this.switchShownContent.emit('shoppingList');
  }
}
