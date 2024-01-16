import {Component, OnInit} from '@angular/core';

import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shared/shopping-list.service";
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../shared/recipe.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
