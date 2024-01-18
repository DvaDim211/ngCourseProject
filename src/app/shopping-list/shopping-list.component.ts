import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shared/shopping-list.service";
import {RecipeService} from "../shared/recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];

  private igChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

}
