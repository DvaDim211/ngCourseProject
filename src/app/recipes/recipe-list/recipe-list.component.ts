import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import{ Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Simply text', `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
    JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`),
    new Recipe(' Another Test recipe', 'Simply text', `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
    JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`),
  ];

  constructor() {
  }

  ngOnInit () {

  }

  onSelectedRecipe(recipeItem: Recipe) {
    this.selectedRecipe.emit(recipeItem);
  };

}
