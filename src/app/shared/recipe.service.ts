import {Injectable} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "./ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Simply text',
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
    JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`,
      [
        new Ingredient('Anything', 2),
        new Ingredient('Anything 2', 3),
      ]),
    new Recipe(
      ' Another Test recipe',
      'Simply text',
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
    JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`,
      [
        new Ingredient('Anything', 2),
        new Ingredient('Anything 2', 3),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }


  onIngredientsAddedToSL(ingredients: Ingredient[]) {
    this.shoppingListService.onIngredientsAdded(ingredients);
  };

}
