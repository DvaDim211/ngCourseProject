import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  recipeItem: Recipe;
  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'Simply text', `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
    JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`),
    new Recipe(' Another Test recipe', 'Simply text', `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UFX
    JpSiF8EwtGwIs1R1sgbrEl-n38QAfPWQkr3IAitzvzRfXPjQbi4YaYSCjPmGDkHY&usqp=CAU`),
  ];

  getRecipes() {
    console.log(this.recipes.slice());
    return this.recipes.slice();
  }

  // onSelectedRecipe(recipeItem: Recipe) {
  //   this.selectedRecipe.emit(recipeItem);
  // };


  constructor() { }
}
