import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shared/shopping-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
form: FormGroup;
subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe();
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required])
    })
  }



  onAddItem() {
    const value = this.form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
