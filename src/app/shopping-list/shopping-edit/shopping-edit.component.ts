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
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.initForm();
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      })
    });
  }

  initForm() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const value = this.form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.editIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.onIngredientAdded(newIngredient);
    }
    this.form.reset();
    this.editMode = false;
  };

  clearForm() {
    this.form.reset();
    this.editMode = false;
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearForm()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
