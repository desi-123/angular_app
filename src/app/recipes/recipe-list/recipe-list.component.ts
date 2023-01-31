import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://media.gettyimages.com/id/1294008943/photo/strawberries-in-shape-of-fish-food-creation-flat-lay.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
