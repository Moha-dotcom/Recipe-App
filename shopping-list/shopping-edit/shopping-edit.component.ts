import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @Output() ingredientAdded = new EventEmitter<Ingredient>();





  constructor() { }

  ngOnInit(): void {

  }
  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    var ingredients = new Ingredient(nameInput.value, amountInput.value);
    this.ingredientAdded.emit(ingredients)
  }
}
