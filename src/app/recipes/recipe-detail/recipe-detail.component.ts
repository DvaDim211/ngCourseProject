import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shared/shopping-list.service";
import {RecipeService} from "../../shared/recipe.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
  @Input() recipeItem: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
  }

  ngOnInit() {

  }

  addToSL() {
    this.recipeService.onIngredientsAddedToSL(this.recipeItem.ingredients)
  }
}
