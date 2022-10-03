import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe : Recipe [] =[
    new Recipe("Malawax", "Eggs, Floor and Hot Water", "https://static01.nyt.com/images/2022/08/29/dining/ia-malawax-1/merlin_212088570_e184439c-ec16-4243-babb-82f8ef8a7489-threeByTwoMediumAt2X.jpg"),
    new Recipe("baris and Hilib", "Rice, Tomato, Onions, Goat Meat, Spices", "https://media.sandiegoreader.com/img/photos/2018/02/20/faridas_goat.jpg"),
    new Recipe("Big mac Burger", "Chicken, Onions, Salad, Cheese, Bread", "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg")
  ];

  @Output() recipes  = new EventEmitter<Recipe>();

  @Output() recipeSelect = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {

  }


  onRecipeSelected(recipeEl: Recipe) {
    this.recipeSelect.emit(recipeEl)


  }
}
