import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test recipe',
  //     'Simply text',
  //     `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
  //   JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`,
  //     [
  //       new Ingredient('Anything', 2),
  //       new Ingredient('Anything 2', 3),
  //     ]),
  //   new Recipe(
  //     ' Another Test recipe',
  //     'Simply text',
  //     `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
  //   JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`,
  //     [
  //       new Ingredient('Anything2.0', 21),
  //       new Ingredient('Anything 2 2.0', 31),
  //     ]),
  // ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  onIngredientsAddedToSL(ingredients: Ingredient[]) {
    this.shoppingListService.onIngredientsAdded(ingredients);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
