import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import * as events from "events";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient [] = [
    new Ingredient("Mango", "12"),
    new Ingredient("Mango", "12")
  ]





  constructor() { }

  ngOnInit(): void {
  }


  onAddItem($event: Ingredient) {
    this.ingredients.push(new Ingredient($event._nameInout, $event._amountInout))

  }
}
