import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../shared/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{


  constructor() {}

  ngOnInit() {}



}
