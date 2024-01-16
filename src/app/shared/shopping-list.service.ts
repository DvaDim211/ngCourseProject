import {ElementRef, EventEmitter, Injectable, Output, ViewChild} from '@angular/core';
import {Ingredient} from "./ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  constructor() {

  }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  };

  onIngredientsAdded(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  };
}
