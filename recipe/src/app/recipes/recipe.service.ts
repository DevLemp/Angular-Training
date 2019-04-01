import { Recipe } from '../shared/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'Best Schnitzel Ever',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
           [
               new Ingredient('Meat', 1), new Ingredient('French Fries', 20) 
            ]),
        new Recipe('Big Fat Burger',
         "Don't eat for the rest of the day",
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
           [
                new Ingredient('Meat', 1), new Ingredient('Bruns', 2), new Ingredient('French Fries', 20)
           ]),
        new Recipe('Fasolakia',
         'You will fart like pig',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
           [
                new Ingredient('Fasolakia', 50), new Ingredient('Potatoes', 10)
           ])
    ];

    constructor(private shoppinglistService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredients(ingredients: Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
    }
}